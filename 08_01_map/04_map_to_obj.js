let product = new Map();
product.set("pCode", "1001").set("pName", "Apple").set("price", 45);

let obj = Object.fromEntries(product.entries());
console.log(obj);
