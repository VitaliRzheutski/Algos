//Time O(w*h),where w -is width(length of the row) of the matrix,
//h -is heigth(length of the column)
//OR O(n)
//space O(w*h)

function riverSizes(matrix) {
  let results = [];
  //initialize our additional matrix that will be the same size
  //as our input one but every element in it will be a boolean,
  //will keep track of visited nodes
  let visited = matrix.map((el) => el.map((e) => (e = false)));
  console.log("visited:", visited);
  //loop and visit every row
  for (let i = 0; i < matrix.length; i++) {
    let subArr = matrix[i];
    //now need to iterate through columns to get to nodes
    for (let j = 0; j < subArr.length; j++) {
      //call a helper function to explore the node
      traverseNode(i, j, matrix, visited, results);
    }
  }
  console.log("result:", results);
  return results;
}
function traverseNode(i, j, matrix, visited, results) {
  let currentRiverSize = 0;
  //define an array(treat like  stack) of nodes(neighbours) to explore
  //where i is the row, j is a column at which node is located

  //Keep track of  nodes that could be part of the same river we are investigating
  let nodesToExplore = [[i, j]]; //storing coordinates of the node we explore
  //while we still have neighboures to explore

  console.log("nodesToExplore:", nodesToExplore);

  while (nodesToExplore.length) {
    //works like DFS
    let currentNode = nodesToExplore.pop();
    console.log("currentNode:", currentNode);
    // i = currentNode[0];
    // j = currentNode[1];
    let [i, j] = currentNode;
    //check if it is visited
    if (visited[i][j]) continue;
    //mark as visited
    visited[i][j] = true;
    //but if its a piece of land then skip it because
    //we do not want to visit neighboring node of 0 because
    //all the nodes next to 0 will not be part of river anyway
    if (matrix[i][j] === 0) continue;
    //else  we're at not visited node and it is a river!!!
    currentRiverSize++;
    //Add unvisited neighbors to the stack
    const neighbours = getNeighbours(i, j, matrix, visited);
    for (let neighbour of neighbours) {
      nodesToExplore.push(neighbour);
    }
  }
  //after done looping and finding rivers =>push the size of the current river to the results arr
  if (currentRiverSize > 0) results.push(currentRiverSize);
}
function getNeighbours(i, j, matrix, visited) {
  const unvisitedNeighbours = [];
  //we're looking at the neighbour above(i-1) 1 row above
  //if = 0 =>there's no neighbour above us
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbours.push([i - 1, j]);
  //now check if we are not at the bottom row
  //and if we haven't visited the neighbour below us
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbours.push([i + 1, j]);
  //check if we are not at leftmost column
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbours.push([i, j - 1]);
  //check if we are not at rightmost column
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNeighbours.push([i, j + 1]);
  console.log("unvisitedNeighbours:", unvisitedNeighbours);
  return unvisitedNeighbours;
}
