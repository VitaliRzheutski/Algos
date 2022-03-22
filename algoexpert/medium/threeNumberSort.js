// time: O(n),space: O(1)
function threeNumberSort(array, order) {
  let p1 = 0;
  let p2 = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (el === order[0]) {
      swap(i, p1, array);
      p1++;
    }
  }
  for (let i = array.length - 1; i >= 0; i--) {
    let el = array[i];
    if (el === order[2]) {
      swap(i, p2, array);
      p2--;
    }
  }
  return array;
}

function swap(curIdx, idx, array) {
  let swap = array[curIdx];
  array[curIdx] = array[idx];
  array[idx] = swap;
}

//--------------------------------
// time: O(n),space: O(1)

function threeNumberSort(array, order) {
  // Write your code here.
  let firstIdx = 0; //a place where all 0's will be stored
  let secondIdx = 0; //a place where all 1 s will be stored
  let thirdIdx = array.length - 1; //all -1

  while (secondIdx <= thirdIdx) {
    //if we are at integer 0 then nevermind, move on
    if (array[secondIdx] === order[0]) {
      let swap = array[firstIdx];
      array[firstIdx] = array[secondIdx];
      array[secondIdx] = swap;
      secondIdx++;
      firstIdx++; //we'll move firstIdx ONLY after we swap and put 0 to the beginning
      //we are sure that if we find another 0 we'll sawp it with the one at firstIdx
    } else if (array[secondIdx] === order[1]) {
      secondIdx++;
    } else {
      let swap = array[thirdIdx];
      array[thirdIdx] = array[secondIdx];
      array[secondIdx] = swap;
      thirdIdx--;
    }
  }
  return array;
}
