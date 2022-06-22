class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  //   O(v+e) tiem O(v) space
  breadthFirstSearch(array) {
    let queue = [this];
    while (queue.length) {
      let shiftedEl = queue.shift();
      array.push(shiftedEl.name);
      for (let kid of shiftedEl.children) {
        queue.push(kid);
      }
    }
    return array;
  }
}
