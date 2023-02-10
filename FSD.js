//1. rest countries
var url = 'https://restcountries.eu/rest/v2/all';
var xhr = new XMLHttpRequest();
xhr.open("GET", url)
xhr.onload = function () {
 var data = JSON.parse(this.response);  // string to JSON
 for(let i =0;i<data.length;i++)
 {
    console.log(data[i].name);
    console.log(data[i].population)
    console.log(data[i].region)
    console.log(data[i].subregion)
    console.log(data[i].flag)
}
};
    xhr.onerror = function () {
 console.log("Error", this.statusText);
};
 xhr.send();

//2. Comparing objects

var obj1 = {Name:'person1',age:30,state:'TN'};
var obj2 = {Name:'person1',age:30,state:'TN'};
console.log(obj1==obj2) // false
console.log(JSON.stringify(obj1)==JSON.stringify(obj2))   //true

var a = {Name:'person1',age:20,state:'TN'}
var b = {Name:'person1',age:20,state:'TN'}
if(JSON.stringify(a)==JSON.stringify(b))
{
    console.log('yes')
}
else{
    console.log('no')
}
