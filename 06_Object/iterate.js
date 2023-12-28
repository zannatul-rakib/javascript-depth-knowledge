// Iterate in Object

var obj = {
  x: 20,
  y: 30,
  z: 40,
};

// check property in object
console.log("z" in obj);

for (var i in obj) {
  console.log(i);
  console.log(obj[i]);
}
