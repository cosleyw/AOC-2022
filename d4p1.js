let input = prompt("problem input");

function inRange(a, b, c){
	return c <= b && c >= a;
}

confirm(
	input
		.split(/\n+/g)
		.map(v=>v.split(/[-,]+/g)
			.map(v=>+v))
		.map(([a,b,c,d])=>(inRange(a,b,c) && inRange(a,b,d)) || (inRange(c,d,a) && inRange(c,d,b)))
		.reduce((a,b)=>+a + +b)
);
