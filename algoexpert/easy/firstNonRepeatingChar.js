// Time O(n) | Space O(1)
function firstNonRepeatingCharacter(string) {

    let obj = {};
    for(let i = 0; i < string.length;i++){
      let el = string[i];
      if(!obj[el]) obj[el] = 1;
      else obj[el]++
    }
     for(let i = 0; i < string.length; i++){
       if(obj[string[i]] === 1) return i
     }
    return -1
    
  }