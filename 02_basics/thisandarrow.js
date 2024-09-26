const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
console.log(this)


//function chai = () => {
 //   let username = "hitesh"
  //  console.log(this.username);
//}
//chai()


const add = (num1 , num2) =>{
    return num1+num2
}
console.log(add(3,4))


//const add = (num1 , num2) =>{
//    return num1+num2
//}
//console.log(add(3,4))


const addtwo = (num3 , num4) => ( num3 + num4 ) 
console.log(addtwo(3,3))
