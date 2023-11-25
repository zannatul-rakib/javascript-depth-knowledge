/** 
    ***** Ternary Operator(?) ******
// What is the Ternary Operator?
    The ternary operator is a conditional operator which evaluates either of two expressions – a true expression and a false expression – based on a conditional expression that you provide.

// Syntax :
    1. condition ? trueExpression : falseExpression;

    2. const result = condition
        ? trueExpresssion
        : falseExpression
 **/

// Examples
const score = 70;
let scoreRatings;

if (score >= 80) {
  scoreRatings = "Execellent";
} else {
  scoreRatings = "Do better";
}

console.log(scoreRatings);

// use ternary operator (?)
// 01.
let marks = 85;

const marksRating = marks > 80 ? "Excellent Result" : "Try to better";
console.log(marksRating);

//02.
let rate = 10;

const rating = rate > 70 ? "High" : rate > 50 ? "Average" : "Low";
console.log(rating);
