const p = document.querySelector("#ape-text");

const possibilites = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

function printLetter() {
  let letter = possibilites[Math.floor(Math.random() * possibilites.length)];
  p.innerHTML += letter;
}

function execute() {
  for (let i = 0; i < 1000; i++) {
    setTimeout(printLetter, i * 1000);
  }
}

execute();
