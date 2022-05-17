// O(log(n)) time | O(1) space
function binarySearch(array, target) {
  let p1 = 0;
  let p2 = array.length - 1;

  while (p1 <= p2) {
    let middle = Math.round((p1 + p2) / 2);
    if (target === array[middle]) return middle;
    if (target < array[middle]) {
      p2 = middle - 1;
    } else {
      p1 = middle + 1;
    }
  }
  return -1;
}
