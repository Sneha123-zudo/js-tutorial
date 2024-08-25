//Primitive - 7 types:- String , Number , Boolean , null , undefined , Symbol , BigInt

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id==anotherId);


//Reference Type or Non-Primitive:- Types- Array , Objects , Functions 

let fruits = ["apple","mango","grapes","kiwi","banana"]
console.log(fruits);
console.log(typeof fruits);

const info={
    name:"Hitesh",
    num:123
}
console.log(info);
console.log(typeof info);


const newfunction = function(){
    console.log("Hello World");
}

console.log(newfunction);
console.log(typeof newfunction);


//***************************************************************

//Memory - Stack(Primitive) , Heap(Non-Primitive)

let name1 = "Shanvi";
let newName = name1;
console.log(name1);
console.log(newName);
newName = "Taksh";
console.log(newName);
console.log(name1);



let userOne = {
    email : "user@gamil.com",
    num : 123
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com"
console.log(userOne);
console.log(userTwo);
