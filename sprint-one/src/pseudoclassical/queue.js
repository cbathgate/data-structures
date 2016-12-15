var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
};

Queue.prototype.size = function() {
  return this.key;
};

Queue.prototype.enqueue = function(value) {
  this[this.key] = value;
  this.key++;
};

Queue.prototype.dequeue = function() {
  var first = this[0];
  for (var i in this) {
    if (i === '0') {
      continue;
    } else {
      this[parseInt(i) - 1] = this[i];
    }
  }
  if (this.key > 0) {
    delete this[this.key - 1];
    this.key--; 
  } 
  return first;
};



