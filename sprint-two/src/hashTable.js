

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var repeat = false;
    var tuples = this._storage.get(index);
    for (var i = 0; i < tuples.length; i++) {
      if (tuples[i][0] === k) {
        repeat = true;
        tuples[i][1] = v;
        break;
      }
    }
    if (repeat === false) {
      tuples.push([k, v]);
    } 
    
    this._storage.set(index, tuples);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  if (tuples === undefined) {
    return null;
  }
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === k) {
      return tuples[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === k) {
      tuples[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
   Time complexity for our functions: O(n)
 */



