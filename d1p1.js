
let input = prompt("problem input");

confirm(
	input
		.split(/\n{2,}/g)
		.map(a=>a.split(/\n+/g)
			.reduce((a,b)=>+a + +b))
		.reduce((a,b)=>a>b?a:b)
);

