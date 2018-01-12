var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[first] = value;
    first++;
  };

  someInstance.dequeue = function() {
    var totalCount = storage[last]
    delete storage[last];
    last++;
    return totalCount;
  };

  someInstance.size = function() {
    if(first - last > 0){
      return first - last;
    }else {
      return 0;
    }
  };

  return someInstance;
};
