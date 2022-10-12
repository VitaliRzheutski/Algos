function sameBsts(arrayOne, arrayTwo) {
    if(arrayOne.length !== arrayTwo.length || arrayOne[0] !== arrayTwo[0]) return false;
    if(arrayOne.length === 0 && arrayTwo.length === 0) return true;
  
    let leftOne = getSmall(arrayOne);
    let leftTwo = getSmall(arrayTwo);
  
    let rightOne = getBigger(arrayOne);
    let rightTwo = getBigger(arrayTwo);
  
    return sameBsts(leftOne, leftTwo) && sameBsts(rightOne,rightTwo)
    }
  
  function getSmall(array){
    let smaller = [];
    for(let i = 1; i < array.length; i++){
      if(array[0] > array[i]) smaller.push(array[i]);
    }
    // console.log('smaller:',smaller)
    return smaller
  }
  function getBigger(array){
    let bigger = [];
    for(let i = 1; i < array.length; i++){
      if(array[0] <= array[i]) bigger.push(array[i]);
    }
    return bigger
  }
  
  // Do not edit the line below.
  exports.sameBsts = sameBsts;
  