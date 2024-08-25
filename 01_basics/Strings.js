name = "Hitesh"
count = 65

console.log(`Hello, ${name} your count is ${count}`);


const newname = "hiteshhc"
console.log(newname[0]);
console.log(newname.length);

console.log(newname.toUpperCase());
console.log(newname.toLowerCase());
console.log(newname.charAt(2));
console.log(newname.indexOf('t'));

let string1 = "hiteshhc-hc";
let string2 = string1.substring(0,4);
//let string2_1 = string1.substring(-8,4);
//console.log(string2_1) substring ignores the neg value 
console.log(string1);
console.log(string2);
//slice except the neg value
let string3 = string1.slice(-7,4);
console.log(string3);

let string4 = "     hitesh   "
let string5 = string3.trim();
console.log(string5);

const url = "https://hiteschoudary@//site%20//gmail.com"
new_url = url.replace('%20','-');
console.log(new_url);

console.log(url.includes('sundar'));
console.log(url.includes('site'));

console.log(string1.split('-'));
