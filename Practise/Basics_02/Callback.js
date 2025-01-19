function f1(){
    console.log("hello");
    return 20;
}
function f2(a,b){
    console.log(a+b);
}
 
f2(100,f1())
