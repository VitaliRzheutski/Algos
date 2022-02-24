//time O(n);space O(1)
function isMonotonic(array) {
  // determine if it's increasing OR decreasing
  let notIncreasing = true;
  let notDecreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) notIncreasing = false; //means it's increasing
    if (array[i - 1] > array[i]) notDecreasing = false; // it IS decreasing
  }
  //return if one of the nonIncreasing or noDecreasing are still true
  return notIncreasing || notDecreasing;
}
