// logical way to find out array length

const names = "Zannatul Ferdus Rakib";

let length = 0;

while (true) {
  if (names.charAt(length) === "") {
    break;
  } else {
    length++;
  }
}
console.log(length);

// simple way
console.log(names.length);
