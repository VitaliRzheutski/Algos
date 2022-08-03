//time O(n^3);space O(n)
function longestPalindromicSubstring(string) {
    // Write your code here.
      let longestStr = '';
  
      for(let i=0;i<string.length;i++){
          let curLong = "";
          //get all the possible substrings and check if they are palindromes
          for(let j=i;j<string.length;j++){
              let curSubStr = string.slice(i,j+1);
            console.log('curSubStr:',curSubStr)
              if(isPalindrome(curSubStr)){
                console.log('true')
                  curLong = curSubStr;
                console.log('curLong:',curLong)
              } 
          }
          if(longestStr.length< curLong.length){
              longestStr = curLong;
          }
      }
      return longestStr;
  }
  function isPalindrome(string){
      let left = 0;
      let right = string.length-1;
      while(left<right){
          if(string[left] !== string[right]) return false;
          left++;
          right--;
      }
      return true;
  }
  