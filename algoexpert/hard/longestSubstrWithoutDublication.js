// Time O(n), Space O(min(n,a)),where n - the length of the input string,
// a - how many alphabet letters are we storing in hash map(we store only non repetitive)
function longestSubstringWithoutDuplication(string) {
    let lastSeen = {};
    let longest = [0,0];
    let startIndex = 0;
    for(let i = 0; i < string.length;i++){
      let char = string[i];
  
      if(char in lastSeen){
        startIndex = Math.max(startIndex,lastSeen[char] + 1);
        console.log('startIndex:', startIndex)
      }
      console.log('lastSeen:', lastSeen)
      if(longest[1] - longest[0] < i + 1 - startIndex){ 
        longest = [startIndex, i + 1];
         console.log('longest:', longest)
      }
      lastSeen[char] = i;
    }
    return string.slice(longest[0], longest[1])
    
  }
  
  // Do not edit the line below.
  exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;
  