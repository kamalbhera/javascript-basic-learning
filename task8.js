const url = 'https://restcountries.eu/rest/v2/all';
const xhr = new XMLHttpRequest();
xhr.open("GET", url)
xhr.onload = function () {
 const data = JSON.parse(this.response);  // string to JS object.
//console.log(data) 
//1.
 var asia = (data.filter((foo)=> foo.region=="Asia" ))
 console.log("Asian countries",asia) // Asian countries detail
 console.log(asia.map((foo)=> foo.name)) //Asian countries name only
//2.
 var people = (data.filter((foo)=> foo.population<2000000 ))
 console.log("Population less than 2lakhs", people)

 //3.
data.forEach(key => console.log( "name:"+ key.name +";"+ "capital :" +key.capital+ " ;"+"flag :"+key.flag))

// data.forEach(key => console.log (key['capital']))
// data.forEach(key => console.log (key['flag']))

//4.
var ans = data.map((foo)=> foo.population)
var totalPeople = ans.reduce((a,b)=> a + b)
console.log(totalPeople)
 
 
5.
 let countriesUsingUsDollars = data.filter((x) => { 
     for (let curr in x.currencies) {
          if (x.currencies[curr].code == 'USD') {
               return true;
             } } }).map(x => console.log(x.name));

};
xhr.onerror = function () {
console.log("Error", this.statusText);
};
xhr.send();

