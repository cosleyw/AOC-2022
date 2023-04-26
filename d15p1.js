let input = prompt("problem input").split(/\n/g).map(v=>v.match(/(-|)[0-9]+/g).map(v=>+v));
input = input.map(([a,b,c,d])=>[a,b,Math.abs(a-c) + Math.abs(b-d)]);

function inRange(a, b, c){
	return c >= a && c <= b;
}

function count(ln){
	let sections = [];
	for(let i = 0; i < input.length; i++){
		let cur = input[i];
		let l = cur[2]-Math.abs(cur[1] - ln);
		if(l > 0)
			sections.push([cur[0] - l , cur[0] + l]);
	}
	sections = sections.sort((a,b)=>a[0]-b[0]);
	let s2 = [sections[0]];
	for(let i = 1; i < sections.length; i++){
		let s = s2[s2.length-1];
		if(inRange(s[0], s[1], sections[i][0])){
			s[1] = Math.max(s[1], sections[i][1]);
		}else{
			s2.push(sections[i]);
		}
	}

	let sum = 0;
	for(let i = 0; i < s2.length; i++){
		sum += s2[i][1] - s2[i][0];
	}
	return sum;
}

confirm(count(2000000));
