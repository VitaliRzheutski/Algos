//Time O(n); space O(n)
function balancedBrackets(string) {
  // Write your code here.
  let obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  let closingBrackets = "})]";
  let openingBrackets = "{([";

  for (let i = 0; i < string.length; i++) {
    let currentBracket = string[i];

    if (openingBrackets.includes(currentBracket)) {
      stack.push(currentBracket);
    } else if (closingBrackets.includes(currentBracket)) {
      if (stack.length === 0) return false;

      if (obj[currentBracket] === stack[stack.length - 1]) stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
