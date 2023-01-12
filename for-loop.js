for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 2.
for (var i = 0; i < 10; i++) {
   setTimeout(() => {
    console.log(i);
   }, 2000);
}
// 3. 
for (let i = 0; i < 10; i++) {
   setTimeout(() => {
    console.log(i);
   }, 2000);
}