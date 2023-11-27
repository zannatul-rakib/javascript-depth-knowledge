/** 
    ** For loops **
for(initializer, condition, increment/decrement){

}

**/

// print 1 to 20
for (var i = 1; i <= 20; i++) {
  console.log(i);
}

// print 1 to 20 odd numbers
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log("odd number is", i);
  }
}

// print 1 to 20 even numbers
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("even number is", i);
  }
}

// print sum of 1 to 5
var sum = 0;
for (var i = 1; i <= 5; i++) {
  console.log(sum + " + " + i + " = " + (sum + i));
  sum += i;
}
console.log("sum", sum);

// display sum of 0 to 100
let total = 0;
const n = 100;

for (let i = 1; i <= n; i++) {
  total += i;
}
console.log("sum : ", total);
