var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else if (list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var last = null;
    if (list.head === last) {
      list.tail = null;
    } 

    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;

  };

  list.contains = function(target) {
    var node = list.head;
    if (node.value === target) {
      return true;
    } while (node.next) {
      node = node.next;
      if (node.value === target) {
        return true;
      }
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



