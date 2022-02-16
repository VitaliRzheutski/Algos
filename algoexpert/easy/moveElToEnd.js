function moveElementToEnd(array, toMove) {
  // Write your code here.
  let p2 = array.length - 1;
  let p1 = 0;
  while (p1 < p2) {
    if (array[p2] === toMove) {
      p2--;
    } else if (array[p1] !== toMove) {
      p1++;
    } else if (array[p1] === toMove) {
      //if the element at the end is !== toMove BUT elements at the beginning === toMove
      //then we know we have to swap them(el from the end will go to the beginning)
      //and el from beginning will go to the end
      let temp = array[p2];
      array[p2] = array[p1];
      array[p1] = temp;
      p1++;
      p2--;
    }
  }
  return array;
}
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
