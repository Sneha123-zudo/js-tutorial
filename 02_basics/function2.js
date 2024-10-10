function sayName(){
    console.log("Thanks you")
}
sayName();

function callName(name){
    console.log(`Hi , Good Morning ${name}`)
}
callName("Sneha")

function average(num1,num2){
    avg = (num1+num2)/2
    console.log(avg)
}
average(4,2)

function funName(firstName , LastName){
    let fullName = firstName + LastName
    return fullName
}
let name = funName("Sneha " , "Mishra")
console.log(name)
