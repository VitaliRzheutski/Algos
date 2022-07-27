function isPalindrome(string) {
  if (string.length === 1) return true;
  let p1 = 0;
  let p2 = string.length - 1;
  while (p1 < p2) {
    if (string[p1] !== string[p2]) return false;
    if (string[p1] === string[p2]) {
      p1++;
      p2--;
    }
  }
  return true;
}
