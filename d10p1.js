let input = prompt("problem input")
	.split(/\n+/g)
	.map(v=>v.split(/ +/g));

let x = 1;
let hist = [x];
for(let i = 0; i < input.length; i++){
	hist.push(x);
	switch(input[i][0]){
		case "noop":
			break;
		case "addx":
			hist.push(x);
			x += +input[i][1];
			break;
	}
}

confirm(
	hist[20]*20 + hist[60]*60 + hist[100]*100 + hist[140]*140 + hist[180]*180 + hist[220]*220
);
