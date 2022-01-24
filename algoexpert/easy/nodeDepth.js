// T:O(n),n -total numbers of nnodes
//S:O(h),h - height of the tree
function nodeDepths(root) {
	//depth === distance between the current node and the root
	let sum = 0;
	let stack = [{node:root,depth:0}];
	while(stack.length){
		const {node,depth} = stack.pop()
		if(node === null) continue;
		sum+=depth;//0 + 1 +1 + 2 +2+2+2 +3+3
		stack.push({node:node.left,depth:depth+1});
		stack.push({node:node.right,depth:depth+1})
	}
	return sum
}