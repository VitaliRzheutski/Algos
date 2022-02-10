function runLengthEncoding(string) {
  let newArr = [];
  let currentLength = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1] && currentLength !== 9) {
      currentLength++;
    } else {
      newArr.push(currentLength);
      newArr.push(string[i - 1]);
      currentLength = 1;
    }
  }
  newArr.push(currentLength);
  newArr.push(string[string.length - 1]);
  return newArr.join("");
}
console.log(runLengthEncoding("AAAAAAAAABBBNNNNMMMKKKKJJJJJJJJJJJJ"));
