// Time O(n^2)
// Space O(1)
function firstDuplicateValue(array) {
  let minDublicateIdx = array.length;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        minDublicateIdx = Math.min(minDublicateIdx, j); //2
      }
    }
  }
  if (minDublicateIdx === array.length) return -1;
  else return array[minDublicateIdx];
}
console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]));

// Time O(n)
// Space O(n)
function firstDuplicateValue(array) {
  let set = new Set();
  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      set.add(array[i]);
      console.log("set:", set);
    } else return array[i];
  }
  return -1;
}
console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]));

//Time O(n);space O(1)
function firstDuplicateValue(array) {
  //Dublicate values will be mapped to the same idx!!!

  //because from the prompt we know that all nums will be in between 1<=n<=length
  // let's map the values of the arr to indices in the arr by subtracting 1 from them
  //we will subtract 1 from every value so that it can be mapped to a VALID idx =>
  //because we can't map n to nth idx(because it will be out of bounds)
  //there's no idx of the length of the arr
  for (let num of array) {
    let absValue = Math.abs(num); //abs because we don't want to go out of bounds when mapping
    // since we know that from prompt all nums are positive,
    // if we come across a negative value at the idx that the value is mapped to =>THEN we've seen that value before
    let idx = absValue - 1;
    if (array[idx] < 0) return absValue;
    //otherwise map it to the idx(mark as visited)
    array[idx] *= -1;
  }
  return -1;
}
console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]));
