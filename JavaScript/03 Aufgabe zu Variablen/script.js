// Erstelle eine Variable banana mit dem Wert "Banane"
let banana = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple"
let apple = "Apple";
// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;
// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let appleKilo = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaKilo = 0.22;
// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
let anzahla = 1 / appleKilo;
let anzahlb = 1 / bananaKilo;
let pricea = applePricePerKilo * appleKilo;
let priceb = bananaPricePerKilo * bananaKilo;

console.log("Pro Kilo hat man ungefähr " + anzahlb + " Bananen");
console.log("Pro Kilo hat man ungefähr " + anzahla + " Äpfel");
console.log("Ein Apfel kostet " + pricea + "€");
console.log("Eine Banane kostet " + priceb + "€");
// Preis von 8 Äpfeln
console.log(pricea * 8);
// Preis von 17 Bananen
console.log(priceb * 17);
// Preis von 1 Tonne Äpfel
console.log(applePricePerKilo * 1000);
// Preis von 1 Tonne Bananen
console.log(bananaPricePerKilo * 1000);