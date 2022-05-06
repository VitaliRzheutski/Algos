class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Time O(N); Space O(1)
function linkedListPalindrome(head) {
  let p1 = head;
  let listLength = 1;
  let p2 = head;
  if (p1.value !== p2.value) return false;
  while (p2.next !== null) {
    p2 = p2.next;
    listLength++;
  }
  let middle = Math.round(listLength / 2);
  let middleTail = head;
  for (let i = 1; i < middle; i++) {
    middleTail = middleTail.next;
  }
  let middlePointer = middleTail.next;
  let reversedSecondHalf = reverse(middlePointer);

  let headOne = head;
  let headTwo = reversedSecondHalf;
  while (headOne !== headTwo && headTwo !== null) {
    if (headOne.value !== headTwo.value) {
      return false;
    }
    headOne = headOne.next;
    headTwo = headTwo.next;
  }
  return true;
}

function reverse(head) {
  let p1 = null;
  let p2 = head;
  while (p2 !== null) {
    let p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }
  return p1;
}
