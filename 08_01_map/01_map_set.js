let product = new Map();
product.set("pCode", "1001");
product.set(1, "Apple");
product.set(true, "Available");
console.log(product);
console.log(product.get(1));
console.log(product.get(true));
