function searchInSortedMatrix(matrix, target) {
  //pointers approach
  //we will start comparing target num with the largest number in the row(which will be at the last col)
  let row = 0;
  let col = matrix[0].length - 1;
  console.log("col:", col);
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return [row, col];
    else if (matrix[row][col] > target) {
      //if it's smaller than target  then all the nimbers below it are ALSO LARGER(so we eliminate them)
      //never visit them (because columns are sorted)
      //check the number to its left
      col--;
    } else if (matrix[row][col] < target) {
      //means that all the nums to its left are SMALLER(don't visit them)=>check the next row
      row++;
    }
  }
  return [-1, -1];
}
//time O(n+m) traverse the same amount of nums of row and col entire row and t
//Space O(1) traverse arr in place
// Do not edit the line below.
