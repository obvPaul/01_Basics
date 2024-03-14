let arr1 = [4, 1, 2, 3];
arr1.push(17, 199);

let result = 0;

for (i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  result = result + arr1[i];
}

console.log(result);

let arr2 = ["Susi", "Paul", "Hans"];

console.log(
  "Meine Freunde sind " + arr2[0] + ", " + arr2[1] + " und " + arr2[2]
);

arr2.push("Sepp");

console.log(
  "Meine Freunde sind " +
    arr2[0] +
    ", " +
    arr2[1] +
    ", " +
    arr2[2] +
    " und " +
    arr2[3]
);
