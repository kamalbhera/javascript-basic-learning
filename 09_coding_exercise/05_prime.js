const isPrime = (n) =>{

    for(let i = 2; i <= n/2 - 1; i++){
        if(n%i === 0) { return false }
    }
    return true;
}

console.log(isPrime(25))
console.log(isPrime(13))
console.log(isPrime(1))