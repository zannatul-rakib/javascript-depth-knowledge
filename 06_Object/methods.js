// Object Methods

var obj = {
  a: 30,
  b: 40,
  c: 50,
};

// Display keys
console.log(Object.keys(obj));

// Display values
console.log(Object.values(obj));

// Assign a new object
var obj2 = Object.assign({}, obj);
obj2.a = 100;
console.log(obj);
console.log(obj2);
