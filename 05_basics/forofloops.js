// for - of Loops
const array = [1,2,3,4,5]
for (const num of array) {
    console.log(num)
}

const string = "Hello World"
for (const str of string) {
    if(str == " "){
        continue;
    }
    console.log(str)
}
const string2 = "Hello World"
for (const str2 of string2) {
    if(str2 == " "){
        break;
    }
    console.log(str2)
}


//Maps

const map = new Map()
map.set("IN" , "INDIA")
map.set("FR" , "FRANCE")
map.set("US" , "UNITED STATES OF AMERICA")
console.log(map);

//map with forof

for (const val of map) {
    console.log(val)
}
for (const [key , val] of map) {
    console.log(key, "=>" , val)
}


//for of not for objects

//const myObject = {
//    "game1" : "Subway Surfers",
//    "game2" : "Temple Run"
//}
//for (const obj of myObject) {
//    console.log(obj)
//}