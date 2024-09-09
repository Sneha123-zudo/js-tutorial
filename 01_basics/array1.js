// array

const myArr = [1,2,3,5,6,7]
const myHeros = ["superman","spiderman","ironman"]
console.log(myArr[0]);
console.log(myHeros[2]);

// methods

myArr.push(8);
console.log(myArr);
myHeros.push("hulk");
console.log(myHeros)

myArr.push(9,10);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(19);
console.log(myArr);

console.log(myArr.shift());
console.log(myArr);
console.log(myArr.shift());
console.log(myArr);


console.log(myArr.includes(6));
console.log(myArr.indexOf(6));


const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B ",myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);

console.log("C ",myArr);