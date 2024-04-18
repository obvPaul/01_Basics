const DNA = "ATGCTTCAGAAAAGGTCAGCG";

let arr = DNA.split("");

let countA = 0;
let countC = 0;
let countG = 0;
let countT = 0;

for (i = 0; i <= arr.length; i++) {
  if (arr[i] == "A") {
    countA = countA + 1;
  } else if (arr[i] == "C") {
    countC = countC + 1;
  } else if (arr[i] == "G") {
    countG = countG + 1;
  } else if (arr[i] == "T") {
    countT = countT + 1;
  }
}

console.log(
  "A is " +
    countA +
    " times, C " +
    countC +
    " times, G " +
    countG +
    " times and T " +
    countT +
    " times inside of the DNA string!"
);
