// Insert & Remove Elements
var arr1 = [1, 2, 3, 4, 5, 6, 7];

arr1[3] = 9; // it's not good way to insert an element
arr1.push(8); // insert an element in the last index
arr1.unshift(10); // insert an element in the first index

// insert 12 in index 4
arr1.splice(4, 0, 12);

// remove element in index 2
arr1.splice(2, 1);

arr1.pop(); // remove element in the last index
arr1.shift(); // remove element in the first index

console.log(arr1);
