// Time O(log(N)) | Space O(1)
function searchForRange(array, target) {
  let p1 = 0;
  let p2 = array.length - 1;
  while (p1 <= p2) {
    let middle = Math.round((p1 + p2) / 2);
    if (array[middle] === target) {
      p2 = middle - 1;
      p1 = middle + 1;

      while (array[p1] === target) {
        p1++;
      }
      while (array[p2] === target) {
        p2--;
      }
      return [p2 + 1, p1 - 1];
    }
    if (array[middle] > target) {
      p2 = middle - 1;
    } else {
      p1 = middle + 1;
    }
  }
  return [-1, -1];
}
