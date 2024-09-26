//Function and semicolon if there are two iife

(function chai(){
    console.log(`DB CONNECTED`)
})();

// Arrow function and parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh')