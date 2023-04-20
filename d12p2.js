let heights = {
	S:0, E:25, a:0, b:1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9, k:10, l:11, m:12, n:13, o:14, p:15, q:16, r:17, s:18, t:19, u:20, v:21, w:22, x:23, y:24, z:25
};
let input = prompt("problem input");
let start = input.indexOf("E");
input = input.split("\n").map(v=>v.split("").map(v=>heights[v]));
let width = input[0].length, height = input.length;
start = [start % (width + 1), start / (width + 1) | 0];

let dists = input.map(v=>v.map(v=>Infinity));
let queue = [];

let bfs = ([x, y], dist, ht)=>{
	if(x >= 0 && x < width && y >= 0 && y < height
	  && ht-input[y][x] <= 1){
		if(dist < dists[y][x]){
			dists[y][x] = dist;
			bfs([x-1, y], dist + 1, input[y][x]);
			bfs([x+1, y], dist + 1, input[y][x]);
			bfs([x, y-1], dist + 1, input[y][x]);
			bfs([x, y+1], dist + 1, input[y][x]);
		}
	}
}

bfs(start, 0, 25);

//console.log(dists.map(v=>v.map(v=>isFinite(v) ? v : -1)).map(v=>v.join("\t")).join("\n"));
input.map((v,i)=>v.map((v,j)=> v==0 ? dists[i][j] : Infinity).reduce((a,b)=>a<b?a:b)).reduce((a,b)=>a<b?a:b);