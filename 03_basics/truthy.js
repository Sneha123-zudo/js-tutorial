//falsy value
// 0 , false , "", BigInt 0n , null , undefined

const mail = "sneha@gmail.com"
if(mail){
    console.log("It's a truthy value , have string");
    
}
else{
    console.log("Thanks");
    
}
const em = ""
if(em){
    console.log("It's a falsy value , have string");
    
}
else{
    console.log("Thanks");
    
}

// Nullish Coalescing operator

let val1;
val1 = 10 ?? 5
console.log(val1)
val1 = null ?? 5
console.log(val1)
val1 = undefined ?? 15
console.log(val1)
val1 = null ?? 25 ?? 18
console.log(val1)

//Ternary Operator

// condition ? true : false

num = 20;
num>18 ? console.log("true"): console.log("false")
