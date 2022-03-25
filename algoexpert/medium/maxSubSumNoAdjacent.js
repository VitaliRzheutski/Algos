//Time O(n);space O(n)
function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (!array.length) return 0;
  if (array.length < 2) return array[0];
  let maxSum = [];
  //at each index store the maxSum that can be generated with no adjacent numbers until the current index
  //BUT not necessarily including the element at current index
  //edge cases
  maxSum[0] = array[0]; //the 1st el will be always the same
  maxSum[1] = Math.max(maxSum[0], array[1]); //the 2nd will be whatever is > (1st OR 2nd)

  //continue building the rest of arr2
  for (let i = 2; i < array.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1], maxSum[i - 2] + array[i]);
    //NOTE : sum at [i-2] will never include the el that is adjacent to the current el
    //so we can add it to the current el (array[i]) BUT!!! if this sum is < than the preveious sum(maxSum[i-1])
    //then we'll take the prev sum (and not add it to array[i] because it will be adjacent)
    // 		sum[i-1] will ALSO never include the el that is adjacent to the current el
  }
  return Math.max(...maxSum);
}

//Time O(n);space O(1) - we are not using extra memory
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length < 2) return array[0];

  let first = array[0]; //serves as the previous not adjacent number
  let second = Math.max(array[0], array[1]); //will serve as the sum of the previous not adjacent numbers
  for (let i = 2; i < array.length; i++) {
    let currentMaxSum = Math.max(first + array[i], second); //195
    first = second;
    second = currentMaxSum; //195
  }
  return second;
}

// Do not edit the line below.
