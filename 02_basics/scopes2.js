function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username)
        console.log(username+website)
    }
    two()
    //console.log(website)
}
one()


if(true){
    const username2 = "hitesh"
    if(username2=="hitesh"){
        const website = "instagram"
        console.log(username2)
    }
   // console.log(website)
}
//console.log(username2)

console.log(addone(3))
function addone(num1){
    return num1 + 2
}


//console.log(addtwo(3))
const addtwo = function(num1){
    return num1 + 2
}
console.log(addtwo(3))