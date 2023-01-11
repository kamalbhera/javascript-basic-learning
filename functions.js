// Javascript normal function or regulare function
function jsFuncrion(x) {
    console.log('====================================');
    console.log(x);
    console.log('====================================');
}
jsFuncrion(10)

// arrow function 
// we can say it's shorted way to create function this function can't not be hosted
var myArrowFunc = (x) => {
    console.log('====================================');
    console.log(x);
    console.log('====================================');
}
myArrowFunc()
// Imidate invoic function
// function call automaticaly when it's declere
(function() {
    console.log('hello');
})();

// annonmay function
var mYAnnonmay = function (params) {
    console.log('This is annonmay function');
}
mYAnnonmay();