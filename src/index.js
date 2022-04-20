class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head = new Node(10);

let vals = new Array(4, 5, 10, 2);

let current = head;
for (let i in vals) {
  let new_node = new Node(vals[i]);
  current.next = new_node;
  current = new_node;
}
// length of linked list

function traverse_to_find_cycle(head) {
  let current = head;
  let counter = 0;
  let store = new Set();
  if (head !== null) {
    store.add(head.val);
  }
  while (current.next != null) {
    if (store.has(current.val)) {
      return true;
    }
    store.add(current.val);
    //counter++;
    current.next = current;
  }
  return false;
}
// Check if the linked list is  having cycle
// print the values of a linked list in reverse order.
// A -> X -> Y-> Z -> B -> C -> D -> E :  assume no value is repoeated in linked list.
// headptr ---> memory store values that we have previously reached
console.log(head.val);

/*
int a = 10: scalar
array b = {10, 20, 30, 40, 10}
values of same data type and size is fixed

list c = [10, "A", 405, 12.65, 10]
values can be of any type and size is not fixed

tuple a = (2, 4, 5)
values can be of any type but it is immutable

set d = {10, 20, 30, 40}
values of any type but they cannot repeat, and size is not fixed.
*/

// reverse print the linked list
current = head;
let arr = new Array();
while (current.next != null) {
  arr.push(current.val);
  current = current.next;
}
let n = arr.length;
for (let i = n; i > 0; i--) {
  console.log(arr[i]);
}
// pointers

// How to find mid point of a linked list

//How to find cycle using slow & fast pointers
