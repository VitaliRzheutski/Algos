// Time O(n),n-lenght of the array
//Space O(1),we are not sroring anything here
function isValidSubsequence(array, sequence) {
    let p1 = 0;
    let p2 = 0;

    while (p1 < array.length && p2 < sequence.length) {
        if (sequence[p2] === array[p1]) {
            p1++;
            p2++;
        }
        else p1++;
    }
    return p2 === sequence.length
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))