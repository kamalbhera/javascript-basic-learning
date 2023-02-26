let a = 4*
5
function test(){
    return
    {
        b: 5;
    }
}
const b = test()
console.log(a, b) // 20, undefined
// JS doesn't add semicolon in the first case because the statement is incomplete and JS assumes there is more code in next line, but in second case it adds semicolon after return
