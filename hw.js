let students =[
    {name:"Adhi",gender:"male"},
    {name:"Ahamed",gender:"male"},
    {name:"rutika",gender:"female"},
    {name:"priya",gender:"female"}
]

var ans =[]
var aa =[]
var count =[]
function foo (item)
{
if(item['gender']=="female") 
ans.push(item['name'])
if(item['name'][0]=='A')
aa.push(item.name)
if(item.gender=='male')
count.push(item.name)
}
 (students.filter(foo))   
 console.log(ans)
 console.log(aa)
 console.log(count.length)

 

// Conventional method
 // // var count = 0;

//  for(let i=0;i<students.length;i++)
//  {
//     if(students[i].gender=='female'){
//     console.log(students[i]["name"]);}
//  }
//     for(let i=0;i<students.length;i++)
//     {
//     if(students[i].name[0]=="A"||students[i].name[0]=="a" ){
//    console.log( students[i].name)
// }}
// for(let i=0;i<students.length;i++){

//     if(students[i].gender=="male"){
//         count +=1
//     }
// }
// console.log(count)