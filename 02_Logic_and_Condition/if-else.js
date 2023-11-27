// even or odd number check
var n = 2;

if (n % 2 === 0) {
  console.log("its even number");
} else {
  console.log("its odd number");
}

// return present day with if else condition
var date = new Date();
var today = date.getDay();
console.log(today);

if (today === 0) {
  console.log("Monday");
} else if (today === 1) {
  console.log("Tuesday");
} else if (today === 2) {
  console.log("Wednesday");
} else if (today === 3) {
  console.log("Thursday");
} else if (today === 4) {
  console.log("Friday");
} else if (today === 5) {
  console.log("Saturday");
} else if (today === 6) {
  console.log("Sunday");
} else {
  console.log("not a valid number");
}
