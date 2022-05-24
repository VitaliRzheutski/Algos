// Time O(log(N)) | Space(1)
function shiftedBinarySearch(array, target) {
  let p1 = 0;
  let p2 = array.length - 1;
  while (p1 <= p2) {
    let middle = Math.floor((p1 + p2) / 2);
    console.log("middle:", array[middle]);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] >= array[p1]) {
      if (target >= array[p1] && target < array[middle]) {
        p2 = middle - 1;
      } else {
        p1 = middle + 1;
      }
    } else if (array[middle] <= array[p2]) {
      if (target > array[middle] && target <= array[p2]) {
        p1 = middle + 1;
      } else {
        p2 = middle - 1;
      }
    }
  }
  return -1;
}
