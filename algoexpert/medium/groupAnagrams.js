// O(w * n * log(n)) time 
// O(wn) space - where w is the number of words and n is the length of the longest word
function groupAnagrams(words) {
    // Write your code here.
      let obj = {};
  //loop over each word
      for(let word of words){
          //sort each word in alphabetical order
          //so that later when we find a corresponding word to this sortedWord=>we'll group them together
          let sortedWord = word.split('').sort().join('');
        console.log(sortedWord)
          //store the sorted word in obj as a key and assign it a value to be an ARRAY of its matching words
          if(!obj[sortedWord]){
              obj[sortedWord] =[word];
          }else{
              //storing the list of words that correspond to the sortedWord(anagram)
              obj[sortedWord].push(word)
          }
      }
      console.log('obj',obj)
      return Object.values(obj);
  }

  