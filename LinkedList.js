// piece of data - val
//reference to next node - next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push a nede to the end of the  list
    push(val){
        //create a new node
        let newNode = new Node(val);
        //if there is no head propetry on the list,
        //set the head and tail to be the newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode; 
            this.tail = newNode; //new node will be the tail
        }
        this.length++; //udate the length
        return this //return the whole list
    }
    // remove a node from the end of List 
    pop(){
        if(!this.head) return undefined; //if the list is emty return undefined
        let current = this.head; 
        let newTail = current;
        //loop through the list
        while(current.next){        //while there is something(when there is no next breal from loop)
            newTail = current;     //prev
            current = current.next //currennt
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;  //decrement length
        //if there is 0, set null
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        return current;
    }
    //removing node from beginning 
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;//refference
        this.head = currentHead.next; //this.head will point to the next node
        this.length--; //decrement length
        if(this.length === 0){
            this.tail = null
        }
        return currentHead 

    }
    //adding a new  node to the beginnig
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head; //node's next to be the current head property(we are pointing newNode to the head)
            this.head = newNode;//set head to be that newly created node(updating this.head)
        }
        this.length++;
        return this;
    }
    //retreiving a node by it's position
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){ 
            current = current.next; //we change our current to be the next
            counter++;
        }
        return current;
    }
    //change the value of a node based on it's position on the linked list
    set(index, val){
        var foundNode = this.get(index); //found node what
        if(foundNode){
            foundNode.val = val; //set the old val to new val
            return true;
        }
        return false;
    }
    //adding a node thie the list at specific position
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);

        var prev = this.get(index - 1);//getting the prev node
        var temp = prev.next; //refference
        prev.next = newNode;
        newNode.next = temp;  //newNode will point on temp
        this.length++; //incrementn length
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1); //need to find prevNode
        var removed = previousNode.next; //will return at the end (reff)
        previousNode.next = removed.next; //pointed to next point(but skiped the removed)
        this.length--; //decrement
        return removed;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
      print(){
          var arr = [];
          var current = this.head
          while(current){
              arr.push(current.val)
              current = current.next
          }
          console.log(arr);
      }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push('!')
console.log('1',list.get(2))
list.set(2,'!!!')
console.log('2',list)
