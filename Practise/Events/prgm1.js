//addEventListener
console.log("from 1st console")
function a(){
    console.log("hello")
}

const i=setTimeout(a, 5000);


const x= function(){
    clearTimeout(i);
}

document.querySelector("button").addEventListener(x,1000)
