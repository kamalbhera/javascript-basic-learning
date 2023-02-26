const discount = (price) => {
  return (discountPercent) => {
    return price * discountPercent;
  };
};

const discountForFiveHundred = discount(500);
const tenPerDiscFiveHund = discountForFiveHundred(0.10);
const fifteenPerDiscFiveHund = discountForFiveHundred(0.15);
console.log(tenPerDiscFiveHund, fifteenPerDiscFiveHund);
