// Time O(n), Space O(n)
function nextGreaterElement(array) {
	/*
1.	create stack and store the indeces of elements from input array that are < then the current
	element we are comparing to.
2. If element > array[stack[stack.length - 1]] 	=> pop() and assign it as an el in a new arr
3. if <  || !stack.length then push i to stack 
4. return resArr
	*/
	let res = new Array(array.length).fill(-1);
	let stack = [];
	for(let i = 0; i < 2 * array.length;i++){
		let currentIdx = i % array.length; // need it because the array is circular. 
		while(stack.length && array[stack[stack.length-1]] < array[currentIdx]){
			res[stack[stack.length-1]] = array[currentIdx];
			stack.pop();
		}
		stack.push(currentIdx);
	}
	return res;
}