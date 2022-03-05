/*
for (let i = 0; i <= 5; i = i + 1) {
  console.log("Die Quadratzahl von " + i + " ist gleich " + i*i);
}

let i = 6;
while (i <= 10) {
  console.log("Die Quadratzahl von " + i + " ist gleich " + i * i);
  i = i + 1;
}
*/



// 1 bis 100 ausgebt

// Nur die geraden Zahlen von 1 bis 100 ausgebt
// Nur die ungeraden Zahlen von 1 bis 100 ausgebt

function gebeGeradeAus(von, bis){
  let i = von;

  while (i <= bis) {
    if (i % 2 == 0) {
      console.log(i)
    }
    i = i + 1;
  }
}

gebeGeradeAus(10, 20);
gebeGeradeAus(11, 13);