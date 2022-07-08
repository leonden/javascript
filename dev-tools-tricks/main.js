const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("hello I am a %s string", "'different language'");
console.log(`hello I am a ${"'variable'"} string`);

// Styled
console.log(
  "%c I am some great text",
  "font-size: 50px; background: red; text-shadow: 10px 10px 0 blue;"
);

// warning!
console.warn("WARNING!");

// Error :|
console.error("ERROR!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd();
});

// counting
console.count("Leon");
console.count("Leon");
console.count("Leon");
console.count("Joel");
console.count("Leon");
console.count("Leon");
console.count("Michael");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/leonden")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table
console.table(dogs);
