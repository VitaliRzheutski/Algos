class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  let listLength = 1;
  let listTail = head;
  while (listTail.next !== null) {
    listTail = listTail.next;
    listLength++;
  }
  let shiftPoint = Math.abs(k) % listLength;
  // we use % because if k>ll length we're
  //gonna do some repetetive shifts (if k = 8 and length is 6 the head of ll
  //will be the same as if we shifted with k=2)
  if (shiftPoint === 0) return head;
  let newTailPosition = k > 0 ? listLength - shiftPoint : shiftPoint;
  let newTail = head;
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }
  let newHead = newTail.next;
  newTail.next = null;
  console.log("listTail:", listTail);
  listTail.next = head;
  return newHead;
}
