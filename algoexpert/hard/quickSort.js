//Best time O(n log n), log n because the pivot divides your input arr in half with each iteration and n because
//every call of quick sort takes roughly O(n) as you have left and right pointers that iterate through array
//Worst Time O(n^2), if pivot divides an array in not equal halfs, then you have to iterate more
//Space O(log n), use recursion
//It is important to use recursion FIRSTLY on the smaller(RIGHT) array, so that the callstack will not be flodded
//with another calls if we let's say for example called on the larger part fist and only then got to the smaller.
//and that you call quick sort on left arr. So less memory on callstack will be used
function quickSort(array) {
  //if num[left]<= pivot    => left++;
  //if num[right] > num[pivot] => right++
  //if num[left] > num[pivot] && num[right] < num[pivot] =>SWAP  num[left] goes to num[right] and  num[right] goes to num[left]
  //we want to put greater left number to the position of the smallet right number in corespondance
  //with the final position of the pivot

  //once left>right => swap  num[pivot] with num[right]
  //!!!Every time we swap pivot it WILL ALWAYS be at its CORRECT position
  //And all numbers to its left will be smaller than that number and all numbers to its right will be larger!!!

  //when comparing numbers at left pointer and right pointe we're trying to find and move all smaller numbers
  //to the left of a potential pivot's correct position and the same with larger numbers
  quickSortHelper(array, 0, array.length - 1);
  return array;
}
function quickSortHelper(array, startIdx, endIdx) {
  //base case
  if (startIdx >= endIdx) return; //if array becomes of length 1 of 0
  let pivot = startIdx; //it point to 0 so that at the end we can swap it with the right number confidently
  let left = startIdx + 1;
  let right = endIdx;

  while (right >= left) {
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      swap(left, right, array);
    }
    if (array[left] <= array[pivot]) left++; //meaning the array[left] is correctly located in regards to final pivot position
    if (array[right] >= array[pivot]) right--;
  }
  //swap the right number with number at pivot becauuse num[right] will always be < then pivot
  swap(pivot, right, array);

  let leftSubArrIsSmaller;
  let leftSubArrLength = right - 1 - startIdx;
  let rightSubArrLength = endIdx - (right + 1);
  if (leftSubArrLength < rightSubArrLength) leftSubArrIsSmaller = true;
  // else leftSubArrIsSmaller = false;
  if (leftSubArrIsSmaller) {
    quickSortHelper(array, startIdx, right - 1);
    quickSortHelper(array, right + 1, endIdx);
  } else {
    quickSortHelper(array, right + 1, endIdx);
    quickSortHelper(array, startIdx, right - 1);
  }
}
function swap(start, end, array) {
  let swap = array[start];
  array[start] = array[end];
  array[end] = swap;
}
