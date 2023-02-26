// 1
console.log(Date.now());

// 2
let dt = new Date();
console.log(dt.getTime());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());

// 3
let dt3 = new Date();
console.log(dt3);
dt3.setTime(0);
console.log(dt3);

// 4
let dt4 = new Date();
console.log(dt4);
dt4.setHours(3);
console.log(dt4);
dt4.setMinutes(45);
console.log(dt4);
dt4.setSeconds(42);
console.log(dt4);
dt4.setMilliseconds(532);
console.log(dt4);

// 5 Calculate the date difference in days ?
let dt5 = new Date(2020,7,25);
let dt6 = new Date(2020,7,23);
let n = dt5.getTime()-dt6.getTime();
n=(n/1000)/3600;
console.log(n);
