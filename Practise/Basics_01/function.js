//Named function/general funciton
let x=function f1(parameters){
    console.log("hello world!")
}
x();
//If I, store in that variable then we should call wrt variable
//2.Ananymous function---> no function name
let a=function (){
console.log("This is ananymous function!!!")
}
a();
//3.Arrow function
const z=()=>{
console.log("this is arrow function")
}
console.log(z())
//_,()X ,return X-1stmt

//4.IIF/SIF
(()=>{
    console.log("self invoking function")
})()
//function call should be immediate
function f(a,b,...c)
{
    console.log(a)
    console.log(b)
    console.log(c)
}
f(10,20,30);
