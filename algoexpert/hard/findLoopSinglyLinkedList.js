//BRUTE FORCE Approach
//Time O(N); Space O(N)
function findLoop(head) {
  const set = new Set();
  while (head.next) {
    if (set.has(head)) return head;
    set.add(head);
    head = head.next;
  }
}

// Time O(N) | Space O(1)
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  let p1 = head.next;
  let p2 = head.next.next;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  p1 = head;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}
