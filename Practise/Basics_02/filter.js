// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const course={
//     fullname:"madhusudhan",
//     petname:"madhu",
//     age:21,
//     height:5.6
// }
// const {height:c}=course;
// console.log(c)

// const ans=myNums.map( (num,index,ar) =>{
//     console.log(index)
//     console.log(ar)
//     return num>4
// })
// console.log(typeof ans)
// console.log( ans)
const myNums=[1,2,3,4,5,6,7,8,9,10]
let p=myNums.reduce( (acc,curr)=>(acc+curr),0);
console.log(p)
console.log(myNums)
//map--> it retuens exact number of array elements
//filter ->returns based on condition
//reduce -> it returns single value by doing operations

const courses=[
    {
        coursename:"React-js",
        courseprice:999
    },
    {
        coursename:"next-js",
        courseprice:856
    },
    {
        coursename:"js",
        courseprice:1999
    },
    {
        coursename:"Java",
        courseprice:9999
    }

]
const ans=courses.reduce( (acc,item)=>(acc+item.courseprice),0);
console.log(ans)
console.log(courses)