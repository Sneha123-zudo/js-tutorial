function SayName() {
    console.log("Hello everyone , my name is Sneha")
}
//SayName - refence that where the name is 
SayName() // prints the function

function addTwoNumbers(number1 , number2){
    return number1 + number2
}
result = addTwoNumbers(3,4)
console.log(result) // printing is important
console.log(addTwoNumbers(1,2))

// prints undefined as we are not passing any arguments
//function username(name){
//    return `hello ${name} , you're welcome`
//}
//console.log(username()) 

//prints nothing
//function username(name){
//    return `hello ${name} , you're welcome`
//}
//console.log(username(" "))

function username(name){
    return `Hello ${name} , you're welcome`
}
console.log(username("Sneha"))