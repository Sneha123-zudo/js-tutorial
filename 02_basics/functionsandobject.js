// Takes first value from the arguments
//function calculateCartprice (num1){
//    return num1
//}
//console.log(calculateCartprice(200,350,400,550))

// Prints all the values

//function calculateCartprice (...num1){
//    return num1
//}
//console.log(calculateCartprice(200,350,400,550))

// prints last two values only

//function calculateCartprice (val1,val2,...num1){
//    return num1
//}
//console.log(calculateCartprice(200,350,400,550))

// Objects with functions

// 1. Not direct passing

const user = {
    username : "Sneha",
    price : 999
}
console.log(user)

function handleObject(anyObject){
    return `Username is ${anyObject.username} and price is ${anyObject.price}`
}

console.log(handleObject(user))

//2. Direct passing

function handleObject(anyObject){
    return `Username is ${anyObject.username} and price is ${anyObject.price}`
}

console.log(handleObject = {
    username : "Sam",
    price : 40
})


//Functions with array

//Indirect 

const myNewArray = [10, 20, 30, 40, 50]

function Array (anyArray){
    return anyArray[2]
}
console.log(Array(myNewArray))

//Direct passing


function Array(anyArray){
    return anyArray[2]
}
console.log(Array([20,40,50,60]))