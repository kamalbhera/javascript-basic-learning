// Get
const dt = new Date();
console.log(dt);
console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getDay());

// Set
let dt2 = new Date();
console.log(dt2);
dt2.setFullYear(2021);
console.log(dt2);
dt2.setMonth(09);
console.log(dt2);
dt2.setDate(12);
console.log(dt2);

// Get milliseconds
let dt3 = Date.parse("2020-07-24");
console.log(dt3);

// Get character of month
let dt4 = new Date();
let arrMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(arrMonths[dt4.getMonth()]);

// Go 50 days back
let dt5 = new Date();
dt5.setDate(dt5.getDate() - 50);
console.log(dt5);

// Overflow date - roll over to next month
let dt6 = new Date(2020, 07, 35);
console.log(dt6);
