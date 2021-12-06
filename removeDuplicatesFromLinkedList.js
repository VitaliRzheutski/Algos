// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
      let currentNode = linkedList; //will be our head
      while(currentNode !== null){
          let nextDistinct = currentNode.next;
          while(nextDistinct !== null && nextDistinct.value == currentNode.value){
              nextDistinct = nextDistinct.next //refferenece
          }
          currentNode.next = nextDistinct //remove all same values
              currentNode = nextDistinct
      }
    return linkedList;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  