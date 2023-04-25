let input = prompt("problem input");
input = input.split(/\n+/g).map(v=>JSON.parse(v));
let dividers = [[[2]],[[6]]];
input.push(dividers[0], dividers[1]);

function compare(a, b){
	if(typeof a == typeof b){
		if(typeof a == "number")
			return b - a;
		for(let i = 0; i < a.length && i < b.length; i++){
			let val = compare(a[i], b[i]);
			if(val != 0)
				return val;
		}
		return b.length - a.length;
	}
	
	if(typeof a == "number")
		return compare([a], b);
	return compare(a, [b]);
}

input = input.sort(compare);
confirm( (input.indexOf(dividers[0]) + 1) * (input.indexOf(dividers[1]) + 1));