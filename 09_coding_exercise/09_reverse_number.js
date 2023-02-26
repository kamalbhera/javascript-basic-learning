// `. with toString
const reverseNumber = (num) => Number(num.toString().split("").reverse().join(""));
console.log(reverseNumber(12345));

// 2. without toString - Hard
/*
* Pseudo Code
rem = 0; rev = 0;
loop till num > 0
    rem = num % 10
    rev = (rev * 10) + rem
    num = (num / 10)
endloop
return rev
*/
const reverseNumber2 = (num) => {
  let rem = 0;
  let rev = 0;
  while(num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10); // parseInt to avoid decimals
  }
  return rev;
};

console.log(reverseNumber2(12345));
