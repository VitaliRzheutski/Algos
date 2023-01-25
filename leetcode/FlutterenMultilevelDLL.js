//  Time: O(n) || Space: O(n)
var flatten = function (head) {
  let stack = []; //will store child.next node
  let temp = head;

  while (head) {
    if (head.child) {
      if (head.next) {
        stack.push(head.next);
      }
      head.next = head.child;
      head.next.prev = head;
      head.child = null;
    } else if (stack.length > 0 && head.next === null) {
      head.next = stack.pop();
      head.next.prev = head;
    }
    head = head.next;
  }
  return temp;
};
