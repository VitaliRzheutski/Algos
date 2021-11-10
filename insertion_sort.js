function insertionSort(array) {
    //grab a number and insert it in the correct spot before
    for (let i = 1; i < array.length; i++) {
        let j = i;
        //we'll interate until j reaches the beginning of the arr
        //and we'll swap the numbers ONLY IF the current num is < then the one before it
        while (j > 0 && array[j] < array[j - 1]) {
            let temp = array[j - 1];
            array[j - 1] = array[j];
            array[j] = temp;
            j--;
        }
    }
    return array;
}
console.log(insertionSort([2, 1, 9, 76, 4]))




function insertionSort1(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort1([2, 1, 9, 76, 4]))