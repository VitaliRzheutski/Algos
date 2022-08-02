function generateDocument(characters, document) {

    let obj = {};
    for(let i = 0; i < characters.length; i++){
      let el = characters[i];
      if(!obj[el]) obj[el] = 1;
      else obj[el]++
    }
  
    for(let i = 0; i < document.length;i++){
      let char = document[i];
      if( !obj[char])return false
      obj[char]--
    }
  return true
  }