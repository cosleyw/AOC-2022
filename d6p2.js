let input = prompt("problem input");

for(let i = 0; i < input.length; i++){
	let s = new Set(input.slice(i, i + 14));
	if(s.size == 14){
		confirm(i + 14);
		break;
	}
}
