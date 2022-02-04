// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
//Time O(n) where n is all elements in array(including nested)
//Space O(d) where d is depth of subarrays(3 recursive calls)
function productSum(array, depth = 1) {
  // Write your code here.
  // let depth = 1;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    //means that arrays is special(nested)
    if (Array.isArray(array[i])) {
      //!!once we call recursion the sum will always start with 0!! BUT depth will increment by 1 every time
      //and eventually each recursion will return calculated sum * depth
      sum += productSum(array[i], depth + 1);
    } else {
      sum += array[i];
    }
  }
  return sum * depth;
}

// Do not edit the line below.
