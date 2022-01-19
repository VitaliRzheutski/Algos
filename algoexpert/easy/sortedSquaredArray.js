//Brute force solution
//Time: O(nlog(n)) :because we are sorting an array
//Space: O(n):because we create a new array
// function sortedSquaredArray(array) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         let sqEl = array[i] * array[i]
//         newArr.push(sqEl)
//     }
//     return newArr.sort((a, b) => a - b)
// }
// console.log(sortedSquaredArray([1, -2, 3]))

//Time: O(n),because we go only once through  this array
//Space: O(n)
function sortedSquaredArray(array) {
    let newArr = new Array(array.length).fill(0);
    let smallerIdx = 0;
    let largerIdx = array.length - 1;

    for(let i = array.length - 1;i >= 0;i--){
        let smallNum = array[smallerIdx];
        let largeNum  = array[largerIdx];
        if(Math.abs(smallNum) < Math.abs(largeNum)){
            newArr[i] = largeNum * largeNum;
            largerIdx--;
        }else{
            newArr[i] = smallNum * smallNum;
            smallerIdx++
        }
    }
    return newArr
}
console.log(sortedSquaredArray([-4,1, -2, 3]))





