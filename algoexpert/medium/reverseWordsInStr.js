// Time & Space O(N)
function reverseWordsInString(string) {
  //loop through input string
  //once we find whitespace let'a slice the word before it and store in words array
  //and immediately push the whitespace to the words arrray and go on..
  let words = [];

  let start = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      words.push(string.slice(start, i)); //slice the word and push it to words array
      start = i; //leave at first found whitespace
      console.log("i in first if", i);
      console.log("start in first if", start);
    } else if (string[start] === " ") {
      words.push(string[start]); //push a whitespace to words and go ahead
      console.log("i in sec if", i);
      start = i; //10
      console.log("start in sec if", start);
    }
    console.log("words inside loop", words);
  }
  words.push(string.slice(start));
  console.log("words", words);
  //reverse the whole words array now
  words = reverse(words);
  return words.join("");
}
function reverse(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let swap = array[start];
    array[start] = array[end];
    array[end] = swap;
    start++;
    end--;
  }
  return array;
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
