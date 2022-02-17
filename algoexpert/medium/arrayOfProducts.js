// Time: O(n^2)
//Space: O(n)
//Naive approuch
function arrayOfProducts(array) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) product *= array[j];
    }
    res[i] = product;
  }
  return res;
}
console.log(arrayOfProducts([5, 1, 4, 2]));

// Time: O(n)
//Space: O(n)
function arrayOfProducts(array) {
  let res = [];
  let leftSide = 1;

  let leftProducts = new Array(array.length).fill(1);
  let rightProducts = new Array(array.length).fill(1);

  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftSide;
    leftSide *= array[i];
    console.log("leftProducts:", leftProducts);
  }
  let rightSide = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightProducts[i] = rightSide;
    rightSide *= array[i];
  }
  for (let i = 0; i < leftProducts.length; i++) {
    let result = leftProducts[i] * rightProducts[i];
    res.push(result);
  }
  return res;
}
console.log(arrayOfProducts([5, 1, 4, 2]));
