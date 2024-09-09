// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

//Dates start from 0
let myCreatedDate = new Date(2023,5,14,4,2)
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());