class ListNode {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new ListNode(value);
    console.log(newNode);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    let newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let i = 0;
    if (this.head === null) {
      return i;
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        i++;
        currentNode = currentNode.nextNode;
      }
      return i;
    }
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    return this.tail.value;
  }
}

let list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("horse");
console.log(list);
list.prepend("snake");
console.log(list);
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
