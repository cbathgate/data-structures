var BinarySearchTree = function(value) {
  var biTree = {}; 
  biTree.value = value; 
  biTree.right = null;
  biTree.left = null;
  _.extend(biTree, binarySearchMethods);

  return biTree;

};

var binarySearchMethods = {}; 

binarySearchMethods.insert = function(value) {
  //debugger;
  var next = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = next;
    } 
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = next; 
    }
  }
};
 //this.children.push(Tree(value))

binarySearchMethods.contains = function(value) {
  debugger;
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(value);
  } else {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(value);
  }

};

binarySearchMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   insert: O(log n)
   contains: O(log n)
   depthFirstLog: O(n)
 */
