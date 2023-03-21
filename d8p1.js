let input = prompt("problem input")
	.split(/\n+/g);

function visTest(s){
	let r = [];
	let cm = -1;
	for(let i = 0; i < s.length; i++){
		if(+s[i] > cm){
			cm = +s[i];
			r.push(true);
		}else{
			r.push(false);
		}
	}
	return r;
}

function rot90(a){
	let r = [];
	for(let i = 0; i < a[0].length; i++){
		let t = [];
		for(let j = 0; j < a.length; j++){
			t.push(a[a.length-1-j][i]);
		}
		r.push(t);
	}
	return r;
}
//yeah
let l, b, r, t;
l = input.map(visTest);
input = rot90(input);
b = rot90(rot90(rot90(input.map(visTest))));
input = rot90(input);
r = rot90(rot90(input.map(visTest)));
input = rot90(input);
t = rot90(input.map(visTest));
input = rot90(input);

let vis = l
		.map((v,i)=>v.map((v,j)=>v||r[i][j]||t[i][j]||b[i][j]));

confirm(
	vis
		.map(v=>v.reduce((a,b)=>+a + +b))
		.reduce((a,b)=>+a + +b)
);
