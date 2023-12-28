// Access in Object

var marks = {
  a: 12,
  b: 34,
  c: 17,
};

// Access with Dot( . ) Notation

console.log(marks.a);
console.log(marks.b);
console.log(marks.c);

// Access with Array ( [] ) Notation

console.log(marks["a"]);
console.log(marks["b"]);
console.log(marks["c"]);

var check = "b";
console.log(marks[check]);

// Update Object Value with Dot notation
marks.a = 300;
marks.x = 250;
console.log(marks);
console.log(marks.f); // undefined (Because you not assign f value in object)

// Update Object Value with Array notation
marks["y"] = 99;

var prop = "z";
marks[prop] = 88;
console.log(marks);

// Remove Properties
delete marks.a;
// console.log(marks);
