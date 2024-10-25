'use strict'
// console.log(this);
// function x(){
//     console.log(this)
// }
// x();
// window.x();
const obj={
    a:10,
    x:function(){
        console.log(this);
    }
}
obj.x()
//arrow function