let input = prompt("problem input")
	.split(/\n+/g)
	.map(v=>v.split(/ +/g));
let r = [
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0]
]

let pa = {};

for(let i = 0; i < input.length; i++){
	for(let j = 0; j < +input[i][1]; j++){
		switch(input[i][0]){
			case "L":
				r[0][0]--;
				break;
			case "R":
				r[0][0]++;
				break;
			case "U":
				r[0][1]++;
				break;
			case "D":
				r[0][1]--;
				break;
		}

		for(let i = 1; i < r.length; i++){
			let dx = Math.abs(r[i-1][0]-r[i][0]);
			let dy = Math.abs(r[i-1][1]-r[i][1]);
		
			if(dx + dy == 3){
				if(dx == 2){
					r[i][1] = r[i-1][1];
				}else{
					r[i][0] = r[i-1][0];
				}
			}
			if(dx == 2){
				r[i][0] = (r[i][0] + r[i-1][0])/2;
			}
			if(dy == 2){
				r[i][1] = (r[i][1] + r[i-1][1])/2;
			}
		}
		pa[r[9][0] + "," + r[9][1]] = 1;
	}
}

confirm(
	Object.keys(pa).length
);
