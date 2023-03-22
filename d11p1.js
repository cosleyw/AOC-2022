let input = prompt("problem input")
	.split(/\n{2,}/g)
	.map(v=>v.split(/\n+/g)
		.map(v=>v.trim().match(/([0-9]+|[\+\*])/g)));
let ma = Array(input.length).fill(0);

for(let k = 0; k < 20; k++){
	for(let i = 0; i < input.length; i++){
		let ia = input[i][1];
		input[i][1] = [];
		for(let j = 0; j < ia.length; j++){
			ma[i]++;
			let wl = +ia[j];
			switch(input[i][2][0]){
				case "*":
					if(input[i][2][1] != undefined)
						wl *= +input[i][2][1];
					else
						wl *= wl;
					break;
				case "+":
					wl += +input[i][2][1];
					break;
			}
			wl = Math.floor(wl/3);
			if((wl % input[i][3]) == 0){
				input[+input[i][4]][1].push(wl);
			}else{
				input[+input[i][5]][1].push(wl);
			}
		}
	}
}

ma = ma.sort((a,b)=>a<b?1:-1);
confirm(ma[0] * ma[1]);