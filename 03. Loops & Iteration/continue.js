// for loop
// 01.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  } else if (i === 3) {
    continue;
  } else if (i === 1) {
    continue;
  } else {
    console.log(i);
  }
}

// 02.
let text = "";

for (let a = 1; a <= 8; a++) {
  if (a === 5) {
    continue;
  }
  text += a;
}
console.log(text);

// while loop
let j = 0;

while (j < 6) {
  j++;

  if (j === 1) {
    continue;
  }
  console.log(j);
}
