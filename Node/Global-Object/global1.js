// ! Global Object
// console.log(global); // return global object
// global.setTimeout(() => {
//   console.log("SetImeout called");
//   clearInterval(interval);
//   console.log("clear interval");
// }, 5000);

// const interval = global.setInterval(() => {
//   //need to add clearInterval method to stop the setInterval
//   console.log("SetInterval called");
// }, 1000);

console.log(__dirname); //E:\Kamal\WEB DEVELOPMENT FULL STACK\The Net Ninja - NodeJs\nodejs-Assignment\Net-Ninja\Global-Object //!Not file name only directory path
console.log(__filename); //E:\Kamal\WEB DEVELOPMENT FULL STACK\The Net Ninja - NodeJs\nodejs-Assignment\Net-Ninja\Global-Object\global1.js //!filenmae with directory path

//! DOM manipulation are not access in Nodejs package.. it is the part of browser and also  we dont need dom manipulation
