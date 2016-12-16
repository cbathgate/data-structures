var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //debugger;
  var result = false;

  var recurse = function(treeChild) {
    for (var i = 0; i < treeChild.length; i++) {
      if (treeChild[i].value === target) {
        result = true;
        break;
      } else if (treeChild[i].children.length > 0) {
        recurse(treeChild[i].children);
      }
    }
  }; 

  recurse(this.children);

  return result; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
