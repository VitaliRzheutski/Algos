function quickselect(array, k) {
  let position = k - 1;
  if (array.length === 1) return k;
  return quickSortHelper(0, array.length - 1, array, position);
}
function quickSortHelper(startIdx, endIdx, array, position) {
  while (true) {
    if (startIdx > endIdx) {
      break;
    }
    let pivot = startIdx;
    let left = startIdx + 1;
    let right = endIdx;

    while (left <= right) {
      if (array[pivot] < array[left] && array[pivot] > array[right]) {
        swap(left, right, array);
      }

      if (array[left] <= array[pivot]) left++;
      if (array[right] >= array[pivot]) right--;
    }
    //now put the pivot number into its correct position AND that position is unfer the right pointer
    swap(pivot, right, array);
    // once the array[pivot] is at its correct position =>all numbers to its left will be <
    //all the numbers to its right will be >

    //check if the number that we just swapped into its correct position is located under the k position?
    if (right === position) return array[right];
    else if (right < position) startIdx = right + 1;
    else endIdx = right - 1; //repeat the process on the left part of the array
  }
}
function swap(left, right, array) {
  let swap = array[left];
  array[left] = array[right];
  array[right] = swap;
}
