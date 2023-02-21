function clickHandler() {
  console.log("CLicked");
}

// /// THIS WILL NOT WORK
// document.addEventListener("click", function () {
//   console.log("CLicked");
// });

// document.removeEventListener("click", function () {
//   console.log("CLicked");
// });

/// THIS WORKS
document.addEventListener("click", clickHandler);
// document.removeEventListener("click", clickHandler);

// REMOVE EVENT LISTENER WORKS ONLY IF SAME FUNCTION IS PASSED TO IT AS THE ADD EVENT LISTENER
// conditions for remove event listener to work
// same target
// same type
// same function

// Phases of an Event : Capturing(reaching target element in DOM), At-Target(target elem reached), Bubbling(going up back in DOM tree from target elem -> root)
// Default: Bubbling, pass true in addEventListener for Capturing
// HW: can event listener be applied in at-target phase

const content = document.querySelector("#wrapper");
content.addEventListener("click", function (event) {
  console.log(event); // this event name can be named anything and not mandatory to name event but a good practice
});
