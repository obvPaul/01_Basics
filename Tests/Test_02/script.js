const data = "Hans geht heute schwimmen! das ist gut";
// Gib jedes 3te Wort aus
// Output
// Hans schwimmen gut

let arr = data.split(" ");

let ausgabe = [];

for (i = 0; i < arr.length; i++) {
  let zähler = i % 3;
  if (zähler == 0) {
    ausgabe.push(arr[i]);
  }
}

console.log(ausgabe);
