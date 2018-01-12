var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var instance = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if(size > 0){
      size--;
      var value = storage[size];
      delete storage[size];
      return value;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
