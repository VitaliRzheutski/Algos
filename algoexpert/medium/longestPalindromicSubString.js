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

//time O(n^2);space O(n)
  function longestPalindromicSubstring(string) {
	// Let's loop through string and at each point(i) imagine i points to the center of palindrome
	
	//let's expand from the center of string to the left and to the right and check for palindrome
	//we'll check every center of a potential palindrome
//if length of string is Odd =>we'll have letter in the center;
	// ''if length is EVEN => we won't have letter in center
	let currentLongest = [0,1]; // by default a single letter is a palindrome
  // (ebdIdx =1 because we will slice. the string at bthe end, excluding lastIdx)
	//start from 1 as we know the letter at 0 will be always a palindrome
	//ANd we can't expand to the left from letter at idx = 0
	for(let i = 1; i < string.length;i++){
		const odd = getLongestPalindromeFrom(string,i-1,i+1);//the center is in between i-1 and i+1
      // console.log('odd',odd)
		const even = getLongestPalindromeFrom(string,i-1,i);//the center is in between i-1 and i
			console.log('odd',odd,'even',even)
		const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
		currentLongest = currentLongest[1] - currentLongest[0] > longest[1]  - longest[0] ? currentLongest : longest;
		
	}
	return string.slice(currentLongest[0],currentLongest[1] + 1);
	
	
}
function getLongestPalindromeFrom(str,left,right){
	while(left >=0 && right <= str.length-1){
		if(str[left] !== str[right]) break;
		left--;
		right++;
	}
	return [left+1,right - 1]
}