let input = prompt("problem input")
	.split(/\n+/g)
	.map(v=>v.split(/ +/g));
let h = [0, 0];
let t = [0, 0];
let pa = {};

for(let i = 0; i < input.length; i++){
	for(let j = 0; j < +input[i][1]; j++){
		switch(input[i][0]){
			case "L":
				h[0]--;
				break;
			case "R":
				h[0]++;
				break;
			case "U":
				h[1]++;
				break;
			case "D":
				h[1]--;
				break;
		}
		let dx = Math.abs(h[0]-t[0]);
		let dy = Math.abs(h[1]-t[1]);
	
		if(dx + dy == 3){
			if(dx == 2){
				t[1] = h[1];
			}else{
				t[0] = h[0];
			}
		}
		if(dx == 2){
			t[0] = (t[0] + h[0])/2;
		}
		if(dy == 2){
			t[1] = (t[1] + h[1])/2;
		}
		console.log(t[0], t[1], h[0], h[1]);
		pa[t[0] + "," + t[1]] = 1;
	}
}

confirm(
	Object.keys(pa).length
);
