let product = new Map();
product.set("pCode", "1001").set("pName", "Apple").set("price", 45);

// Note: can't use break with forEach but can use with for of
product.forEach((v, k, m) => {
  console.log(`${v},${k}`);
});
