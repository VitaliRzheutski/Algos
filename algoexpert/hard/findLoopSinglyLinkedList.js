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
