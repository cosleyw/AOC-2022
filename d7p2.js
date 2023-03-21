let input = prompt("problem input");
input = input.split(/\n+/g)
	.map(v=>v.split(/ +/g));

let i = 0;

let rfs = {};

function parse(fs){
	for(; i < input.length;){
		switch(input[i][0]){
			case "$":
				switch(input[i][1]){
					case "cd":
						switch(input[i][2]){
							case "..":
								i++;
								return;
								break;
							case "/":
								i++;
								parse(rfs);
								break;
							default:
								fs[input[i][2]] ??= {};
								parse(fs[input[i++][2]]);
						}
						break;
					case "ls":
						i++;
						break;
				}
				break;
			case "dir":
				fs[input[i][1]] ??= {};
				i++;
				break;
			default:
				fs[input[i][1]] = input[i][0];
				i++;
		}
	}
}

while(i < input.length)
	parse(rfs);

let sd = {};
function sizes(fs, p){
	let sum = 0;
	for(f in fs){
		if(typeof(fs[f]) == typeof(""))
			sum += +fs[f];
		else
			sum += sizes(fs[f], p + "/" + f);
	}
	sd[p] = sum;
	return sum;
}
sizes(rfs, "/");

let target = 30000000 - (70000000 - sd["/"]);
let dsz = sd["/"];
for(f in sd){
	if(sd[f] >= target && sd[f] <= dsz){
		dsz = sd[f]
	}
}

confirm(dsz);
