// Implement LinkedList using the functional instantiation pattern

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
    } 

    if (list.tail) {
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function() {

    if (list.head === null) {
      return null;
    } 

    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;

  };

  list.contains = function(target) {

    var node = list.head;

    while (node) {
      
      if (node.value === target) {
        return true;
      }

      node = node.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

   addToTail: O(1)
   removeHead = O(1)
   contains = O(n)

 */



