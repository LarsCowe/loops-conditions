const getallen = [10, -3, 22, 0, 7, -5];

console.log("Start analyse met For-loop:");

for (let i = 0; i < getallen.length; i++) {
  let getal = getallen[i];

  if (getal > 0) {
    if (getal % 2 === 0) {
      console.log(getal + " is positief en even");
    } else {
      console.log(getal + " is positief en oneven");
    }
  } else if (getal < 0) {
    console.log(getal + " is negatief");
  } else {
    console.log("Het getal is nul");
  }
}

console.log("\nStart While-loop:");
let teller = 3;
while (teller > 0) {
  console.log("Tellen: " + teller);
  teller--;
}

console.log("\nNu komt de grote fout (Infinite Loop):");
let gevaar = 10;
// DE FOUT: De conditie is gevaar > 5, en we tellen op in plaats van af.
// Hierdoor blijft gevaar altijd groter dan 5.
while (gevaar > 5) {
  console.log("Help! Ik zit vast in een loop! Waarde: " + gevaar);
  gevaar++;
}
