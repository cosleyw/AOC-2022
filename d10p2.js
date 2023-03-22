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
	hist
		.map((v,i)=>{
			let r = "";
			let dx = (i % 40) - v;
			if(dx >= 0 && dx < 3)
				r += "#";
			else
				r += ' ';
			if(i % 40 == 0)
				r += "\n";
			return r;
		}).join("")
);
