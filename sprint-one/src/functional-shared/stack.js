var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  key: 0,
  size: function () {   
    return this.key;
  },
  push: function (value) {
    this[this.key] = value;
    this.key++;          
  },
  pop: function () {
    var last = this[this.key - 1];
    if (this.key > 0 ) {
      delete this[this.key - 1]; 
      this.key--;
    }
    return last;
  }
};


