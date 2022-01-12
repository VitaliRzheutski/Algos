class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key,value){
      let index = this._hash(key); //will get index our key
      if(!this.keyMap[index]){ //if there is something already there (it's not)
        this.keyMap[index] = []; //setting to the empty array
      }
      //we just push key and value a new array in to the parrent array of that index
      this.keyMap[index].push([key, value]);
    }

    get(key){
        let index = this._hash(key);//will get index our key
        //do we have something at this index?
        if(this.keyMap[index]){ 
            //if we have for example a few arrays at one index we need to loop over
          for(let i = 0; i < this.keyMap[index].length; i++){
              //trying to fined correct key
            if(this.keyMap[index][i][0] === key) {  
            //when we found correct key,we want to return value nnot a whole subArray
              return this.keyMap[index][i][1]
            }
          }
        }
        //if we didn't fined return undefined
        return undefined;
      }

      keys(){
        let keysArr = [];
        //loop through keyMap
        for(let i = 0; i < this.keyMap.length; i++){ 
            // if there is annything there
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!keysArr.includes(this.keyMap[i][j][0])){
                keysArr.push(this.keyMap[i][j][0])
              }
            }
          }
        }
        return keysArr;
      }
      values(){
        let valuesArr = [];
        //loop through keyMap
        for(let i = 0; i < this.keyMap.length; i++){
            // if there is annything there
          if(this.keyMap[i]){
              //this.keyMap[i] - each subArray
            for(let j = 0; j < this.keyMap[i].length; j++){
                //if its no inncluded value(we donn't need duplicated values)
              if(!valuesArr.includes(this.keyMap[i][j][1])){
                  //push only values(this.keyMap[i][j][1])
                valuesArr.push(this.keyMap[i][j][1]) 
              }
            }
          }
        }
        return valuesArr;
      }
 
  }
  
  let ht = new HashTable(17);
  ht.set("maroon","#800000")
  ht.set("yellow","#FFFF00")
  ht.set("olive","#808000")
  ht.set("salmon","#FA8072")
  ht.set("lightcoral","#F08080")
  ht.set("mediumvioletred","#C71585")
  ht.set("plum","#DDA0DD")
  