// Object Literals 

const mySum = Symbol("Key1")
 const Jsusers={
    name :"Hitesh",
    "full name":"Hitesh Choudhary",
    [mySum] : "mykey1",
    age :18,
    location : "Jaipur",
    email :"hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
 }

 console.log(Jsusers.email)
 console.log(Jsusers["email"])
 console.log(Jsusers["full name"])
 console.log(Jsusers [mySum])

 Jsusers.email = "hiteshchatgpt@google.com"
 //Object.freeze(Jsusers)
 Jsusers.email = "hiteshmicrosoft@google.com"
 console.log(Jsusers)

 Jsusers.greeting = function(){
    console.log("Hello Js users")
 }

 Jsusers.greetingTwo = function(){
    console.log(`Hello Js users ${this.name}`);
 }

 console.log(Jsusers.greeting());
 console.log(Jsusers.greetingTwo());