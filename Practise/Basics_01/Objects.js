// const obj1={1:"A",2:"b"}
// const obj2={3:"A",4:"b"}
// const obj3={5:"A",6:"b"}

// const obj4=Object.assign(obj1,obj2,obj3)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)
// console.log(Object.keys(obj1))
  
// const course =[
//     {},
//     {},
//     {
//         name:"python",
//         time:123
//     },
//     {
//         name:"java",
//         time:45
//     }
// ]  
  
// // console.log(Object.keys(course[2]))
// //Object Destructing

// const Facebook={
//     name:"killer",
//     password:"killer@123",
//     dateOfRecived:30
// }
// const {dateOfRecived:hi}=Facebook
// // console.log(dateOfRecived)
// console.log(hi)
  
const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  
  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"
  let mysym=Symbol();
  const o1=new Object({
    name:"hello",
    [mysym]:"hi",
    user:{
        fullname:{
            hi:"hi",

        }
    }
  })
console.log(o1.user["fullname"]["hi"])
const o=[
  {

  },{} ,{}
]

  