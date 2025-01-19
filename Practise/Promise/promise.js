// const pone=new Promise(function(resolve,reject){
//     //Db cals,crypto-task,network call
//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve()//connect
//     },1000)

// });
// //consume the promise
// pone.then(function(){
//     console.log("promise consumed");
    
// });//reslove has direct relation with resolve 




// new Promise(function(resolve,reject){
//     setTimeout(function(){
//       console.log("Async task 2")  
//       resolve();
//     },2000)
// }).then(function (){
//     console.log("Async 2 resolves")
// ;})


// document.getElementsByClassName();
// document.getElementById();//first occuernece
// document.getElementsByTagName();HTMLAllCollecti
// document.querySelector();//first occurenece
// document.querySelectorAll();//nodelist

const promisthree=new Promise(function(reject ,reslove){
    reslove({username:"chai",email:"t@ggr"});
})
console.log(promisthree)

const x=promisthree.then(function(){
    console.log("hi")
});
console.log(x);

const promfour=new Promise(function(resolve,reject){
    console.log("hi from promise")
    resolve();
})
console.log(promfour)
promfour.then(function (){
    console.log("this is fom then")
})
try{

}catch{
    promfour.catch(function(error){

        console.log(" ERROR:")
    })
}
JSON.stringify()
JSON.parse
console.log(promfour.json())