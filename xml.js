const url = 'https://restcountries.eu/rest/v2/all'
const getCountries = () => {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)

  xhr.onload = () => {
    var data = xhr.response
    data = JSON.parse(data)
    var people = data.filter(foo => foo.population > 10000000)
    var arr = people.map((foo)=>  {
        return "name " + foo.name +"  population: "+ foo.population;
    })
    console.log(arr)
  }
  xhr.send()
}
getCountries()
