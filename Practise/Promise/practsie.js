//PROMISE
const fs=require("fs");

function Read(cb){
    fs.readFile('index.html',"utf-8",function(err,data){
        cb(data);
    });
}

function onDone(data){
    console.log(data);
}


Read(onDone)