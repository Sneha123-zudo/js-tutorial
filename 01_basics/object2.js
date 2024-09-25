// Singleton object creation
 //const tinderUser = new Object();
 // Literals object creation
 const tinderUser={}
    tinderUser.id ="123abc"
    tinderUser.name = "Som"
    tinderUser.email = "somgithub@gmail.com"
    tinderUser.isLoggedIn = "True"
//console.log(tinderUser)

const realUser = {
    email : "somgoogle@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Hitesh",
            lastname : "Choudhary"
        }
    }
}
console.log(realUser)
console.log(realUser.fullname)
console.log(realUser.fullname.userfullname)
console.log(realUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {4:"e", 5:"f"}
const obj3 = Object.assign(obj1,obj2,obj4)
console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))