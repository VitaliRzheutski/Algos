var RandomizedSet = function () {
  this.set = {};
  this.array = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  console.log("val to insert", val);
  if (this.set[val]) {
    return false;
  } else {
    this.set[val] = val;
  }
  this.array.push(val);
  console.log("this.set in insert:", this.set);
  console.log("this.array:", this.array);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  console.log("val to remove:", val);
  if (!this.set[val]) {
    console.log("false");
    return false;
  } else {
    for (let key in this.set) {
      if (this.set[key] === val) {
        delete this.set[key];
      }
    }
    console.log("true");
    console.log("this.set in remove:", this.set);
    return true;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  // console.log('this.set in getRandom!:',this.set);
  // let valuesArr = Object.values(this.set);
  // console.log('valuesArr:', valuesArr)

  // let geRandomIdx = Math.floor(Math.random() * valuesArr.length);
  // let getRandomVal = valuesArr[geRandomIdx]
  // console.log('getRandomVal:',getRandomVal)
  // return getRandomVal

  return this.array[Math.floor(Math.random() * this.array.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
