let input = prompt("problem input");

for(let i = 0; i < input.length; i++){
	let s = new Set(input.slice(i, 4));
	if(s.size == 4){
		confirm(i);
		break;
	}
}
