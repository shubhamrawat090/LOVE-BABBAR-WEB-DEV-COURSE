// let testPromise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("I am inside Promise1");
//   }, 5000);
//   resolve(12223);
//   //   reject(new Error("Error Occurred"));
// });

///////////// WHEN PROMISE IS FULFILLED => runs when resolve is called
// prints 12223, value passed in resolve
// testPromise1.then((value) => {
//   console.log(value);
// });

///////////// WHEN PROMISE IS REJECTED => runs when reject is called
// testPromise1.catch((error) => {
//   console.log("recieved an error");
// });

///////////// HANDLING RESOLVE AND REJECT BOTH USING THEN
// testPromise1.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log("recieved an error");
//   }
// );

// let testPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("I am inside Promise2");
//   }, 3000);

//   resolve(12223);
//   //   reject(new Error("Error Occurred"));
// });

//////////////////// PROMISE CHAINING //////////////////
// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("p1 started after 2 sec");
//   }, 2000);
//   resolve("p1 resolved");
// });

// let output = p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("p2 started after 2 sec");
//     }, 2000);
//     resolve("p2 resolved");
//   });

//   return p2;
// });

// output.then((value) => console.log(value));
// console.log("After");

//////////// ASYNC AWAIT

// // returns a promise
// // state: fulfilled
// // result: 7
// async function abcd() {
//   return 7;
// }

// async function utility() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Delhi mein bahut garmi hai");
//     }, 5000);
//   });

//   let hydWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hyderabad cool hai");
//     }, 6000);
//   });

//   let delhi = await delhiWeather; // next line doesn't execute till delhiWeather promise isn't resolved
//   let hyd = await hydWeather; // next line doesn't execute till hydWeather promise isn't resolved

//   return [delhi, hyd];
// }

/////////////////////// fetch api

//// GET CALL
// async function utility() {
//   let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let output = await content.json();

//   console.log(output);
// }

// utility();

//// POST CALL
async function helper() {
  let options = {
    method: "POST",
    // Data to send to server
    body: JSON.stringify({
      title: "yo",
      body: "ho ho",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  let content = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  let output = await content.json();

  return output;
}

async function utility() {
  let answer = await helper();

  console.log(answer);
}

utility();
