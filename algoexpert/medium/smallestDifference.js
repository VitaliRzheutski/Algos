//Time O N(log N) + M(log M)
//space O(1)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let smallest = Infinity;
  let current = 0;
  let pair = [];

  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    let firstNum = arrayOne[p1];
    let secondNum = arrayTwo[p2];

    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      p1++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      p2++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > current) {
      smallest = current;
      pair = [firstNum, secondNum];
    }
  }
  return pair;
}
