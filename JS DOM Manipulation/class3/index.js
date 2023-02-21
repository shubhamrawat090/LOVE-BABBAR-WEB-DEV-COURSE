// adding 1000 para
const t1 = performance.now();
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is Para " + i;

  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("took: " + (t2 - t1) + " milliseconds");

// optimising a bit
const t3 = performance.now();
let myDiv = document.createElement("div");

for (let i = 1; i <= 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is Para " + i;

  myDiv.appendChild(element);
}

document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("took: " + (t4 - t3) + " milliseconds");

/////// BEFORE : 100 reflow, 100 repaints

/// DOC FRAGMENT (1 reflow, 1 repaint) - BEST OPTIMIZED
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is Para " + i;

  fragment.appendChild(element);
}
document.body.appendChild(fragment);
const t6 = performance.now();
console.log("took: " + (t6 - t5) + " milliseconds");
