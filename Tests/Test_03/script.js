const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";
// Berechne den Mittelwert der Temperaturen der beiden Wochen
// Gib aus
// Mittelwert Woche 1 : xxx
// Mittelwert Woche 2 : xxx
// "Woche 1 war wärmer" oder "Woche 2 war wärmer" oder "Beide Wochen waren gleich warm"

let w1 = temperaturesWeek1.split(",");
let w2 = temperaturesWeek2.split(",");

//Ich muss alles zusammenzählen und dann durch die insgesammte Menge dividieren

let dividend = 0;
let zähler = 0;

let numbers = parseFloat(w1);
let numbersweek2 = parseFloat(w2);

console.log(numbers);
console.log(numbersweek2);

for (i = 0; i < numbers.length; i++) {
  dividend = dividend + 1;
  zähler = zähler + numbers[i];
}

console.log(dividend);
console.log(zähler);

function Mittelwert(a, b) {
  a / b;
}

let Mittelwert1 = Mittelwert(zähler / dividend);

console.log("Mittelwert Woche 1: " + Mittelwert1);

dividend = 0;
zähler = 0;

for (i = 0; i < numbersweek2.length; i++) {
  dividend = dividend + 1;
  zähler = zähler + numbersweek2[i];
}

let Mittelwert2 = Mittelwert(zähler / dividend);

console.log("Mittelwert Woche 1: " + Mittelwert2);

if (Mittelwert1 > Mittelwert2) {
  console.log("Woche 1 war wärmer!");
} else if (Mittelwert1 < Mittelwert2) {
  console.log("Woche 2 war wärmer!");
} else if (Mittelwert1 == Mittelwert2) {
  console.log("Beide Wochen waren gleich lang!");
}
