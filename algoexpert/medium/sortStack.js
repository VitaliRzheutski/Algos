//Time O(n^2) - we pop n elements from stack , then push, and then we can at most pop again n elements while inserting function runs
// n*n = n^2
//Space O(n) - where n is number of elemennts in recursion callstack
function sortStack(stack) {
  /*  Approach 
	1. pop all elements until stack is empty( it will be sorted then)
	2. call helper method to insert all those elements(tops) that are all callstack in correct position
	Corrrect position will be if element we want to insert is >= that current top of the already sorted stack OR if stack is empty
	3. If it is not >= then pop() the top annd call insert on the same elemennt put on a stack without popped element
	and check if we can inseert it now
	If not then repeat the process=> call insert helper again until we find the correct spot to push
	4. Then push back the previously poipped elements (tops) to the stack after we found the correct position 
	*/
  //base case
  if (!stack.length) return stack;
  let top = stack.pop();
  sortStack(stack);
  insertInCorrectPosittionIStack(stack, top);
  return stack;
}

function insertInCorrectPosittionIStack(stack, element) {
  if (stack.length === 0 || stack[stack.length - 1] <= element) {
    stack.push(element);
    return;
  }
  let top = stack.pop(); // 3
  insertInCorrectPosittionIStack(stack, element);
  stack.push(top);
}
// Do not edit the line below.
exports.sortStack = sortStack;
