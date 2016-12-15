var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;

};
Stack.prototype.size = function() {
  return this.key;
};

Stack.prototype.push = function(value) {
  this[this.key] = value;
  this.key++;
};
Stack.prototype.pop = function () {
  var last = this[this.key - 1];
  if (this.key > 0 ) {
    delete this[this.key - 1];
    this.key--;
  }
  return last;
};
