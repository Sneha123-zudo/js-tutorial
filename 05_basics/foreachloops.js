const coding = ["java" , "python" , "javascript" , "ruby"]

//coding.forEach( function (item){
//    console.log(item);
//    
//} )

coding.forEach( (item) => {
        console.log(item);
        
    } )


function printMe(item){
console.log(item)
}

coding.forEach(printMe)


coding.forEach((item , index , array)=>{
    console.log(item , index , array)
})



const coding1 = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]
coding1.forEach((item) => {
    console.log(item.languageName)
})
