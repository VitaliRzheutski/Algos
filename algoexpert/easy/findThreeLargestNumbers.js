function findThreeLargestNumbers(array) {
  // Write your code here.
  let resArr = [null, null, null];
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (resArr[2] === null || el > resArr[2]) {
      resArr[0] = resArr[1];
      resArr[1] = resArr[2];
      resArr[2] = el;
    } else if (resArr[1] === null || el > resArr[1]) {
      resArr[0] = resArr[1];
      resArr[1] = el;
    } else if (resArr[0] === null || el > resArr[0]) {
      resArr[0] = el;
    }
  }
  return resArr;
}

console.log(findThreeLargestNumbers([45, 3, 5, 345, -24, -56, 7, 6, 6, 5]));
