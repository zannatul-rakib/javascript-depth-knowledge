// Find out Data with in Array
var arr = [23, 35, 76, 87, 54, 92, 48, 61, 90, 13, 51];

var find = 90;
var isFound = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log("Data found at index " + i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("Data not found!");
}
