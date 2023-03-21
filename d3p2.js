let input = prompt("problem input");

//from mdn set page
function intersection(setA, setB){
	const _intersection = new Set();
	for (const elem of setB) {
		if (setA.has(elem)) {
			_intersection.add(elem);
		}
	}
	return _intersection;
}

function score(s){
		return Number.parseInt(s, 36) - 9 + (s.charCodeAt(0) & 32 ? 0 : 26);
}

function zip3(a){
	let r = [], c = [];
	for(let i = 0; i < a.length; i++){
		c.push(a[i]);
		if(c.length == 3){
			r.push(c);
			c = [];
		}
	}
	return r;	
}

confirm(
	zip3(input
		.split(/\n+/g))
		.map(([a,b,c])=>intersection(intersection(new Set(a), new Set(b)), new Set(c)))
		.map(v=>v.keys().next().value)
		.map(score)
		.reduce((a,b)=>a+b)
);
