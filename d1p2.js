let input = prompt("problem input");

confirm(
	input
		.split(/\n{2,}/g)
		.map(a=>a.split(/\n+/g)
					.reduce((a,b)=>+a + +b))
		.sort((a,b)=>a<b?1:-1)
		.slice(0,3)
		.reduce((a,b)=>+a + +b)
);

