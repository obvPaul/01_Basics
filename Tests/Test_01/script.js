const numbers = "8,2,1,4,6,1,8,7";
// Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
// Output: 3

let einzeln = numbers.split(",");

console.log(einzeln);

let zähler = 0;

// Ich will 4, 5, 6 und 7 testen

for (i = 0; i < einzeln.length; i++) {
  let testen = einzeln[i];
  if (testen == 4) {
    zähler = zähler + 1;
  } else if (testen == 5) {
    zähler = zähler + 1;
  } else if (testen == 6) {
    zähler = zähler + 1;
  } else if (testen == 7) {
    zähler = zähler + 1;
  }
}

console.log(zähler);
