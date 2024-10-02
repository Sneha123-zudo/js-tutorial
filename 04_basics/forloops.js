//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//    
//}

for (let index = 0; index < 10 ; index++) {
    const element = index;
    console.log(element);
    
    
}

//Table of n

let n = 5
console.log("Table of " + n);
for (let index = 0; index <= 10; index++) {
    console.log(n + "X" + index + "=" + n*index);
    
    
}


for (let i = 0; i <=10 ; i++) {
    console.log(`Outer loop ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop ${i} and ${j}`)
    }
    
}
const myArray = ["flash" , "superman" , "spiderman" , "hulk"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}