// if

const age = 18
if(age <= 20){
    console.log("Age is less than 20")
}
else if(age == 18){
    console.log("Age is equal to 18")
}
else if(age >= 20){
    console.log("Age is not greater than 20")
}
else{
    console.log("Age is not valid")
}


const balance = 1000
if(balance > 500) console.log("balance is greater"), console.log("Balance is less");
    

const loggedIn = true;
const iscorrect = true;
const isntcorrect = false;

if(loggedIn && iscorrect){
    console.log("using and");
    
}
if(loggedIn || isntcorrect){
    console.log("using or");
    
}
