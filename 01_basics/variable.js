const accountID = 12344
let accountEmail = "sneha@google.com"
var accountPassword = "2345"
accountState="Bengaluru" 

//accountID = 233445 ;- We can change the const variables 
console.log(accountID)
//We can change let and var 
accountEmail = "mishra@google.com"
accountPassword="74624"
accountState="West Bengal"
console.table([accountEmail,accountPassword,accountState])

//We will mostly use let and const 
//We will not use var because of issue in functional block and scope
let accountCity;
// If we dont give any value to variable it will give undefined output
console.table([accountEmail,accountPassword,accountState,accountCity])

