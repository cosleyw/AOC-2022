function zipn(a, n){
	let r = [], c = [];
	for(let i = 0; i < a.length; i++){
		c.push(a[i]);
		if(c.length == n){
			r.push(c);
			c = [];
		}
	}
	if(c.length != 0)
		r.push(c);
	return r;
}

let input = prompt("problem input");

input = input
	.split(/\n{2,}/g);

let stack = input[0]
	.split(/\n+/g)
	.map(v=>zipn(v,4)
		.map(v=>v[1]));

stack[stack.length-1] = stack[stack.length-1]
	.map(v=>[]);

stack
	.reduceRight((a,b)=>a
		.map((v,i)=>{b[i] != ' ' && v.push(b[i]); return v;}));

stack = stack.pop();

let operations = input[1]
	.split(/\n+/g)
	.map(v=>v.match(/[0-9]+/g)
		.map(v=>+v));

operations
	.map(([n,f,t])=>{
		console.log(f, t);
		let c = [];
		for(let i = 0; i < n; i++)
			c.push(stack[f-1].pop());
		for(let i = 0; i < n; i++)
			stack[t-1].push(c.pop());
	})

confirm(
	stack
		.map(v=>v.pop())
		.join("")
);
