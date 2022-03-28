// Time: O(n)
// Space: O(1)
function hasSingleCycle(array) {
  // Write your code here.
  //keep track of visited elements
  let counter = 0;
  let idx = 0;
  // let jump = 0;
  while (counter < array.length) {
    //if we already visited some elemnets BUT came back to the first element =>single cycle is broken
    if (counter > 0 && idx === 0) return false;
    counter++;
    let jump = array[idx];
    //EDGE CASES
    //if we pass the bounds(the end of the array) =>
    //we need to start either from the beginning
    let nextIdx = (idx + jump) % array.length;

    //but if we have a negative integer then we recalculate nextIdx
    // so that it puts it at the correct spot starting from the end of the arr
    //it's king of getting a positive equivalent for that negative index
    if (nextIdx < 0) {
      nextIdx = nextIdx + array.length;
    }
    idx = nextIdx;
  }
  //once we break out from the while loop(meaning we visited all elements)
  //return true ONLY  if we are back at the 0th element
  return idx === 0;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
