// T: O(n)
// S: O(1)
function getNthFib1(n) {
  let lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter += 1;
  }
  if (n > 1) return lastTwo[1];
  else return lastTwo[0];
}
console.log(getNthFib1(6));

// T: O(2^n)
// S: O(n)
function getNthFib2(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib2(n - 1) + getNthFib2(n - 2);
}
console.log(getNthFib2(6));

//Time: O(n)
// Space: O(n)
function getNthFib3(n, memo = { 1: 0, 2: 1 }) {
  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = getNthFib3(n - 1, memo) + getNthFib3(n - 2, memo);
    return memo[n];
  }
}
console.log(getNthFib3(6));
