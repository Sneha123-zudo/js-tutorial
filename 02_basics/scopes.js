let a = 300 // Global scope 

// Things wriiten inside the scope is block scope 
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log('INNER  is a:' ,a  )
}

console.log(a)
//console.log(b)
console.log(c)