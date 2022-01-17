// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor(){
		this.stack = [];
		this.minStack = [];
		this.maxStack=[];
	}
  peek() {
    // Write your code here.
		return this.stack[this.stack.length-1]
  }

  pop() {
    // Write your code here.
		this.maxStack.pop();
		this.minStack.pop();
		return this.stack.pop();
  }

  push(number) {
    // Write your code here.
		if(!this.stack.length){
			this.minStack.push(number);
			this.maxStack.push(number);
		}else{
			let min = Math.min(number, this.minStack[this.minStack.length-1]);
			let max = Math.max(number,this.maxStack[this.maxStack.length-1]);
			this.minStack.push(min);
			this.maxStack.push(max);
		}
		
		this.stack.push(number);  
  }

  getMin() {
    // Write your code here.
		return this.minStack[this.minStack.length-1];
  }

  getMax() {
    // Write your code here.
	return this.maxStack[this.maxStack.length-1];

  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
