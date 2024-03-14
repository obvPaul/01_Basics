let X = "X";
let O = "O";
let counter = 0;

let letter = X;

for (let x = 0; x < 20; x++) {
  console.log(letter);
  if (x % 4 == 0) {
    if (letter == O) {
      letter = X;
    } else {
      letter = O;
    }
  }
}

let count = 0;

for (i = 0; i <= 100; i++) {
  let div = i % 2;
  if (div == 0) {
    count = count + i;
  }
}

console.log(count);

let input = 36;

for (c = 0; c <= 222; c++) {
  if (c%5==0){
    console.log("Foo");
  } else if (c%7==0){
    console.log("Bar");
  } else {
    console.log(c);
  }

}
