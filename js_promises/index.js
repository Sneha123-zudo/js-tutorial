
//Promises

//Syntax

//let firstPromise = new Promise((resolve, reject)=>{
//    console.log("Babbar");
//    resolve(1001);
//});


//let firstPromise = new Promise((resolve, reject)=>{
//    setTimeout(function  sayMyName(){
//        console.log("My name is Love Babbar");
//    }, 15000)
//});

let Promise1 = new Promise((resolve,reject)=>{
let success = true;
if(success) {
    resolve("Promise Fulfilled");
}
else{
    reject("Promise Rejected");
}
})

Promise1.then((message)=>{
    console.log("Then ka message is " + message);
}).catch((error)=>{
    console.log("Error: " + error);
})