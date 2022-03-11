function minimumCharactersForWords(words) {
  // Write your code here.
  if (!words.length) return [];
  let resStr = "";
  if (!words.length) return [];
  let obj = {}; //obj with element letters
  for (let letter of words[0]) {
    // console.log('letter:',letter)
    if (!obj[letter]) obj[letter] = 1;
    else obj[letter]++;
  }
  console.log("obj:", obj);

  for (let i = 1; i < words.length; i++) {
    let obj2 = {};
    for (let j = 0; j < words[i].length; j++) {
      let el = words[i][j]; //each element
      console.log("el:", el);
      if (!obj2[el]) {
        obj2[el] = 1;
      } else {
        obj2[el]++;
      }
    }
    console.log("obj2:", obj2);
    for (let key in obj2) {
      if (!obj[key]) {
        obj[key] = obj2[key];
      } else if (obj[key] < obj2[key]) {
        obj[key] = obj2[key];
      }
    }
    // console.log('obj:',obj)
  }
  for (let key in obj) {
    resStr += key.repeat(obj[key]);
  }
  // console.log('resStr:',resStr.split(''))
  return resStr.split("");
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
