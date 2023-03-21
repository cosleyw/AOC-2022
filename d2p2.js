let input = prompt("problem input");

function scoreRound(a, b){
	let scoreDict = {"X": 1, "Y": 2, "Z": 3, "AX": 3, "AY": 6, "AZ": 0, "BX": 0, "BY": 3, "BZ": 6, "CX": 6, "CY": 0, "CZ": 3};

	return scoreDict[b] + scoreDict[a + b];
}

confirm(
	input
		.split(/\n+/g)
		.map(v=>scoreRound(...v.split(/ +/)))
		.reduce((a,b)=>a+b)
);
