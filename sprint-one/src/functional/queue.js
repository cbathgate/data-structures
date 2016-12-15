var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    var first = storage[0];
    for (var i in storage) {
      if (i === '0') {
        continue;
      } else {
        storage[parseInt(i) - 1] = storage[i];  
      }
    } 
    if (key > 0) {
      delete storage[key - 1];
      key--;
    }
    return first;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
