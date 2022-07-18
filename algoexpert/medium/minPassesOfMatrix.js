// Write whatever you want here.
// 1.traverse matrix
// 2.find positive indecies and store in queue1
// 3. Traverce queue1 and shift indecies one by one
// 4. create findAndConvertNegativeNeighbours func (like DFS)
// 5. traverse the result of findAndConvertNegativeNeighbours func and store to the second queue2
// 6. count the times
// 7.queue1 = queue2
// 8.we shoudl check at the end if there is still negative numbers in matrix if its return false otherwise times - 1
function minimumPassesOfMatrix(matrix) {
  let queuePositive = []; // [[0,3],[1,0],[2,0]]
  let times = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        queuePositive.push([i, j]);
      }
    }
  }
  //! We'll use 2 queues to see what elements we process in first pass and then in second pass and so on...
  while (queuePositive.length) {
    //[[0,3],[1,0],[2,0]]
    let queueForNextPass = []; //will store positions of negative neighbors that will be converted to positive for next  pass

    while (queuePositive.length > 0) {
      let [i, j] = queuePositive.shift(); // [[0,2],[1,3],[1,1],]
      let adjacentNegativeNeigbors = findAndConvertNegativeNeigbors(
        i,
        j,
        matrix
      );

      for (const [row, col] of adjacentNegativeNeigbors) {
        queueForNextPass.push([row, col]); //push the positions of these newly transformed positive numbers to use for their adjecent for next iteration
      }
    }
    //finished the pass
    times++; // will be another iteration(pass of matrix) with newly converted numbers
    queuePositive = queueForNextPass; //[[2,4]]
  }

  //times -1 because we'll also have 1 more pass based on the way we implement the solution
  // if after all the possible passs were made and we still have negative=> then return -1 ( means we couldn't convert all the negative numbers)
  return !containsNegative(matrix) ? times - 1 : -1;
}
function containsNegative(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) return true;
    }
  }
  return false;
}

function findAndConvertNegativeNeigbors(i, j, matrix) {
  // 1,1
  let queue = [];
  if (i > 0 && matrix[i - 1][j] < 0) {
    matrix[i - 1][j] *= -1;
    queue.push([i - 1, j]);
  }
  if (i < matrix.length - 1 && matrix[i + 1][j] < 0) {
    matrix[i + 1][j] *= -1;
    queue.push([i + 1, j]);
  }
  if (j > 0 && matrix[i][j - 1] < 0) {
    matrix[i][j - 1] *= -1;
    queue.push([i, j - 1]);
  }
  if (j < matrix[i].length - 1 && matrix[i][j + 1] < 0) {
    matrix[i][j + 1] *= -1;
    queue.push([i, j + 1]);
  }
  return queue;
}
