function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let p1 = i + 1;
    let p2 = array.length - 1;
    while (p1 < p2) {
      let sum = array[i] + array[p1] + array[p2];
      if (targetSum === sum) {
        res.push([array[i], array[p1], array[p2]]);
        p1++;
        p2--;
      } else if (targetSum > sum) {
        p1++;
      } else if (targetSum < sum) {
        p2--;
      }
    }
  }
  return res;
}
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
