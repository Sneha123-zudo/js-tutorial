const myObject = {
        "game1" : "Subway Surfers",
        "game2" : "Temple Run"
    }
for (const key in myObject) {
    console.log(key)
}

const array = [1,2,3,4,5]

for (const val in array) {
    console.log(val)
}

const map = new Map()
map.set("IN" , "INDIA")
map.set("FR" , "FRANCE")
map.set("US" , "UNITED STATES OF AMERICA")
console.log(map);

//map with forin

for (const key in map) {
    console.log(key);
    
}