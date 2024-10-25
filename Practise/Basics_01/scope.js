// if(false){
//     var a=10;
//     let b=12;
//     const c=14;

// }
// console.log(a)//undefined
// // console.log(b)
// // console.log(c)
'use strict'
console.log(this) //{}-
function x(){
    console.log(this)
}
x();
const obj={
    a:10,
    x:function(){
        console.log(this);
    }
}
obj.x();
//arrow function
