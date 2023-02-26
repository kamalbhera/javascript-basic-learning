let product = new Map();
// map chaining sets
product.set('pCode','1001')
        .set(1,'Apple')
        .set(true,'Available');
 
for(let k of product.keys()){
    console.log(k);
}
for(let v of product.values()){
    console.log(v);
}
for(let e of product.entries()){
    console.log(e);
}
for(let [ek,ev] of product.entries()){
    console.log(ek,ev);
}