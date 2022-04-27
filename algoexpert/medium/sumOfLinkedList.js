// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

// TIme O(m,n) | Space O(m,n) - where n is length of first linkedList
// m - length second linked list
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let carry = 0;
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  // console.log('nodeOne:',nodeOne)
  // console.log('nodeTwo:',nodeTwo)
  let dummy = new LinkedList(0); //create dummy LL that will point to the head of result LL
  let current = dummy; //keeps track of the last node we created in the final LL
  while (nodeOne || nodeTwo || carry !== 0) {
    let firstNum, secondNum;
    firstNum = nodeOne ? nodeOne.value : 0;
    secondNum = nodeTwo ? nodeTwo.value : 0;

    let sum = firstNum + secondNum + carry;
    //kak v stolbik reshaem, i  sum budet summa tvuh chisel kotorije mi skladivaem
    //a to chislo chto mi perenosim na drugoe budet=> carry
    let newNumValue = sum % 10; // we want to take only the remainder after this sum is divided by 10
    // (like in math 7+5 = 12 but we take only 2 as current newValue and pass 1 as a carry)
    let newNode = new LinkedList(newNumValue); //creating a new Node in a dummy LL
    current.next = newNode; //assign a pointer of prev node to current new node we created
    current = newNode; //update the current node
    carry = Math.floor(sum / 10); // to take carry for next iteration
    if (nodeOne) {
      nodeOne = nodeOne.next;
    } else nodeOne = 0; //in case there're no more nodes in LL1=> we'll be just adding 0s
    if (nodeTwo) {
      nodeTwo = nodeTwo.next;
    } else nodeTwo = 0;
  }
  return dummy.next;
}
