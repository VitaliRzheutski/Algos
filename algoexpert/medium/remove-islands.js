//Time O(wh) space O(wh) ,where w and h are the width and height of the input matrix
// 1. Main func removeIslands:
//   -loop through matrix
// 2. Check if current node is 1 AND it touches the border touchesBorder func
//     - if current node does not touch the border then move forward
//     - if current node is not 1 (later it might be 0 or 2) then move forward
// 3. If node touches the border and it is 1 then we have to change it to 2 and
//     also explore its neighbours that might be part of it
//   - change1ConnectedToBorderTo2 func
//   - store position of current node that touches the border in STACK
//   - and change them to 2 value
// 4. TraverseNeighbours func for explore all neighbours (left,right,top,down)
//   - and push these values to an array
// 5. Once we got all the neighbors of the current node, loop through them and check if any of them === 1
//    we don't want to consider 0s
//   - if it's neighbour is 0 then just skip it
//   - push to the stack only those neighbours that ===1
// 6. At the ena in mian func
//   - eventually we'll have a matrix that will contain only those 1s that we need to change to 0. So
//   - after we changed all 1's that are touching the border to 2's in matrix=>
//   - set all 1's to 0's and 2's back to 1's
// 7. return the matrix
function removeIslands(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    // console.log('matrix[i]:',matrix[i])
    for (let j = 0; j < matrix[i].length; j++) {
      // console.log('matrix[0]:',matrix[0])
      //if they current node does not touch the border then move forward
      if (!touchesBorder(i, j, matrix)) continue;
      //if current node is not 1 (later it might be 0 or 2) then move forward
      if (matrix[i][j] !== 1) continue;

      //but if node touches the border and it is 1 then we have to change it to 2 and
      //also explore its neighbours that might be part of it
      change1ConnectedToBorderTo2(i, j, matrix);
    }
  }
  //eventually we'll have a matrix that will contain only those 1s that we need to change to 0. So
  //after we changed all 1's that are touching the border to 2's in matrix=>
  //set all 1's to 0's and 2's back to 1's
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) matrix[i][j] = 0;
      if (matrix[i][j] === 2) matrix[i][j] = 1;
    }
  }
  return matrix;
}

function touchesBorder(i, j, matrix) {
  return (
    i === 0 || i === matrix.length - 1 || j === 0 || j === matrix[i].length - 1
  );
}
function change1ConnectedToBorderTo2(i, j, matrix) {
  let stack = [[i, j]]; //position of current node that touches the border
  while (stack.length) {
    let currentPosition = stack.pop();
    let [i, j] = currentPosition;
    matrix[i][j] = 2; //reassign it it 2
    //now lets explore all its neighbours
    let neighbours = traverseNeighbours(i, j, matrix);
    //once we got all the neighbors of the current node, loop through them and check if any of them ===1
    //we don't want to consider 0s
    for (let neighbour of neighbours) {
      let [i, j] = neighbour;
      if (matrix[i][j] !== 1) continue; //if it's neighbour is 0 then just skip it
      stack.push(neighbour); //push only those neighbours that ===1
    }
  }
}
function traverseNeighbours(i, j, matrix) {
  let neighbours = []; // it will look like that [[1,0],[3,4]...]
  if (i > 0) neighbours.push([i - 1, j]); //up     //push the coordinates of the neighbor
  if (i < matrix.length - 1) neighbours.push([i + 1, j]); //down
  if (j > 0) neighbours.push([i, j - 1]); //left
  if (j < matrix[0].length - 1) neighbours.push([i, j + 1]); //right
  console.log("neighbours:", neighbours);

  return neighbours;
}
