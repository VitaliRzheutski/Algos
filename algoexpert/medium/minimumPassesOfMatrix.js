function minimumPassesOfMatrix(matrix) {
    const passes = convertNegatives(matrix);
  
    return !containsNegative(matrix) ? passes - 1 : -1;
  }
  
  function convertNegatives(matrix) {
    let nextPassQueue = getAllPositivesPositions(matrix);
    let passes = 0;
  
    while(nextPassQueue.length > 0){
      const currentPassQueue = nextPassQueue;
      nextPassQueue = [];
  
      while(currentPassQueue.length > 0){
        const [currentRow, currentCol] = currentPassQueue.shift();
  
        const adjacentPositions = getAdjecentPositions(currentRow, currentCol, matrix);
        for(const position of adjacentPositions){
          const [row, col] = position;
  
          const value = matrix[row][col];
          if(value < 0){
            matrix[row][col] *= -1;
            nextPassQueue.push([row, col])
          }
        }
      }
      passes++
    }
    return passes
  }
  
  function getAllPositivesPositions(matrix){
    const positivePos = []
    for(let i = 0; i < matrix.length;i++){
      for(let j = 0; j < matrix[i].length;j++){
        let value = matrix[i][j];
        if(value > 0) positivePos.push([i,j])
      }
    }
   return positivePos
  }
  
  function getAdjecentPositions(row, col, matrix) {
    const neighboursPositions = [];
    if(row > 0)neighboursPositions.push([row - 1, col]) //up
    if(row < matrix.length - 1) neighboursPositions.push([row + 1, col])//down
    if(col > 0) neighboursPositions.push([row, col - 1]);//left
    if(col < matrix[0].length - 1) neighboursPositions.push([row, col + 1])//right
    return neighboursPositions
  }
  
  function containsNegative(matrix) {
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length;j++){
        if(matrix[i][j] < 0) return true
      }
    }
    return false
  }
  