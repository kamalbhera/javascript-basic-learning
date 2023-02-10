let students =[
    {name:"Adhi",gender:"male"},
    {name:"Ahamed",gender:"male"},
    {name:"Rutika kadam",gender:"female"},
    {name:"Priyadharshini",gender:"female"}
]

var femalee=(students.filter((foo)=> foo.gender=='female' ))
var men =(students.filter((foo)=> foo.gender=='male' ))
var a =(students.filter((foo)=> foo.name[0]=="A"))
console.log(femalee.map((foo)=> foo.name))
console.log(a.map((foo)=> foo.name))
console.log(men.length)
