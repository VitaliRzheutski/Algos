// Time: O(4^n * n) || Space O(4^n * n) 
function phoneNumberMnemonics(phoneNumber) {
    let resArr = [];
    let currentMnemonic = new Array(phoneNumber.length).fill(0)
    helper(0, phoneNumber, currentMnemonic, resArr)
    return resArr
  }
  function helper(idx, phoneNumber, currentMnemonic, resArr){
    //base case
    if(idx === phoneNumber.length){
      let mnemonic = currentMnemonic.join('');
      resArr.push(mnemonic)
    }else{
       //recursive case
      let digit = phoneNumber[idx];
      let letters = keyBoard[digit];
  
      for(let i = 0; i < letters.length; i++){
        let letter = letters[i];
        currentMnemonic[idx] = letter
        helper(idx + 1, phoneNumber, currentMnemonic, resArr )
    }
  }
  }
  
  let keyBoard = {
      1 : ['1'],
      2 : ['a', 'b', 'c'],
      3 : ['d', 'e', 'f'],
      4 : ['g', 'h', 'i'],
      5 : ['j', 'k', 'l'],
      6 : ['m', 'n', 'o'],
      7 : ['p', 'q' , 'r' , 's'],
      8 : ['t', 'u', 'v'],
      9 : ['w', 'x', 'y', 'z'],
      0 : ['0']
    }
  
 