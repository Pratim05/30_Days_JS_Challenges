// Day 17: Data Structures

// Activity 1: Linked List
// Task 1: Implement a flode class to represent an element in a linked list with properties value and next.

class flode {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}


// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList{
    constructor(){
        this.head = null
    }

    addNode (value){
        const newNode = new flode(value)
        if(this.head=== null){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode
        }
    }

    removeNode(){
        if(this.head=== null){
            console.log('List is Empty')
            return
        }
        if(this.head.next === null){
            this.head = null
        }else{
            let current = this.head
            while(current.next.next !== null){
                current = current.next
            }
            current.next = null
        }
    }

    displayAllNode (){
        if(this.head=== null){
            console.log('List is Empty')
            return
        }
        let current = this.head
        let result = ''
        while (current !== null) {
            result += current.value + ' -> ' 
            current = current.next
        }
        result += 'null'
        console.log(result) 
    }
}

const list = new LinkedList()

list.addNode(0)
list.addNode(1)
list.addNode(2)
list.addNode(3)

list.displayAllNode() // 0 -> 1 -> 2 -> 3 -> null
list.removeNode()
list.displayAllNode() //0 -> 1 -> 2 -> null

// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // View the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Display all elements in the stack
    display() {
      console.log(this.items.join(" "));
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.peek()); // Output: 3
  stack.display();           // Output: 1 2 3
  console.log(stack.pop());  // Output: 3
  stack.display();           // Output: 1 2
  

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str) {
    const stack = new Stack();
  
    // Push all characters of the string onto the stack
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
  
    // Pop all characters from the stack and build the reversed string
    let reversedStr = "";
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  // Example usage
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  console.log(reversedString); // Output: "olleh"
  

// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and Front (view the first element).

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the first element of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // View the first element of the queue
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Display all elements in the queue
    display() {
      console.log(this.items.join(" "));
    }
  }
  
  // Example usage
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.front()); // Output: 1
  queue.display();            // Output: 1 2 3
  console.log(queue.dequeue()); // Output: 1
  queue.display();            // Output: 2 3
  

//Task 6 : Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    // Add a print job to the printer queue
    addPrintJob(job) {
      this.queue.enqueue(job);
      console.log(`Added job: ${job}`);
    }
  
    // Process the next print job in the queue
    processPrintJob() {
      if (this.queue.isEmpty()) {
        console.log("No print jobs in the queue.");
      } else {
        const job = this.queue.dequeue();
        console.log(`Processing job: ${job}`);
      }
    }
  
    // Display all print jobs in the queue
    displayQueue() {
      if (this.queue.isEmpty()) {
        console.log("No print jobs in the queue.");
      } else {
        console.log("Current print jobs in queue:");
        this.queue.display();
      }
    }
  }
  
  // Example usage
  const printerQueue = new PrinterQueue();
  printerQueue.addPrintJob("Print job 1");
  printerQueue.addPrintJob("Print job 2");
  printerQueue.addPrintJob("Print job 3");
  
  printerQueue.displayQueue(); // Output: Current print jobs in queue: Print job 1 Print job 2 Print job 3
  
  printerQueue.processPrintJob(); // Output: Processing job: Print job 1
  printerQueue.processPrintJob(); // Output: Processing job: Print job 2
  printerQueue.displayQueue();    // Output: Current print jobs in queue: Print job 3
  
  
// Activity 4: Binary Tree
// Task 7: Implement a Treeliode class to represent a node in a binary tree with properties value, left, and right.

class Treeliode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }  

// Task B: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Method to insert values into the binary tree
    insert(value) {
      const newNode = new Treeliode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to insert nodes recursively
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Method for in-order traversal
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Example usage
  const tree = new BinaryTree();
  tree.insert(5);
  tree.insert(3);
  tree.insert(7);
  tree.insert(2);
  
  
  tree.inOrderTraversal(); // Output: 2 3 5 7
  


// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.