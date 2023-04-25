let input = prompt("problem input").split(/\n+/g).map(v=>v.split(/\s+->\s+/g).map(v=>v.split(",").map(v=>+v)));

let map = Array(1000).fill(0).map(v=>Array(1000).fill(0).map(v=>"."));

function drawLine(a, b){
	if(a[0] == b[0]){
		let sp = Math.min(a[1], b[1]);
		let ep = Math.max(a[1], b[1]);
		for(let i = sp; i <= ep; i++)
			map[a[0]][i] = '#';
	}else if(a[1] == b[1]){
		let sp = Math.min(a[0], b[0]);
		let ep = Math.max(a[0], b[0]);
		for(let i = sp; i <= ep; i++)
			map[i][a[1]] = '#';
	}else{
		console.log("bad line :/", a, b);
	}
}

function drawPath(p){
	for(let i = 1; i < p.length; i++)
		drawLine(p[i-1], p[i]);
}

input.forEach(drawPath);

function sim(p){
	let nx = p[0], ny = p[1]+1;
	if(map[nx][ny] == '.')
		return [nx, ny];
	nx = p[0] - 1;
	if(map[nx][ny] == '.')
		return [nx, ny];
	nx = p[0] + 1;
	if(map[nx][ny] == '.')
		return [nx, ny];
	return p;
}

function grain(){
	let p = [500, 0];
	let i = 0;
	while(1){
		let np = sim(p);
		if(np == p){
			map[np[0]][np[1]] = '+';
			return true;
		}
		p = np;
			
		i++;
		if(i > 800)
			return false;
	}
}

let res = 0;
while(grain() != false) res++;
console.log(map.map(v=>v.join("")).join("\n"));
confirm(res);
