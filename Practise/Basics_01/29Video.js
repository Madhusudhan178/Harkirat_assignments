// const myobj={
//     js:"Javascript",
//     "cpp":"C++"
// }
// for (const key in myobj) {
//     console.log(`the full form of ${key} is ${myobj[key]}`);
// }
let arr=[10,20,30];
// let v=arr.forEach((i)=>{
//     console.log(i);
//     return i;
// });
// console.log(v);
// let a=arr.forEach(function (i){//in CALLBACK FUNCTION THER IS NO FUNCTION NAME
//     console.log("hello");
// }
// );
// console.log(a)

// function f1(){
//     console.log(this)
// }
// f1()


// arr.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// arr.forEach(printMe);//pass the refrence


arr.forEach( (item,index,a)=>{
console.log(item,index,a)
})

const mycoding=[
    {
        languagename:"Javascript",
        shortName:"js"
    },
    {
        languagename:"Java",
        shortName:"java"
    },
    {
        languagename:"Python",
        shortName:"py"
    }
]
mycoding.forEach((item)=>
{
        
    console.log(`the language name is: ${item.languagename} short name is ${item.shortName} `)

})

