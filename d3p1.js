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

confirm(
	input
		.split(/\n+/g)
		.map(v=>[new Set(v.slice(0, v.length/2)), new Set(v.slice(v.length/2))])
		.map(([a,b])=>intersection(a,b))
		.map(v=>v.keys().next().value)
		.map(score)
		.reduce((a,b)=>a+b)
);
