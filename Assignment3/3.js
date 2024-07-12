/*let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/
let string = 'I N D I A';
let arr = string.split(' ');
console.log(arr);
arr.splice(3,0,'O','N','E','S');
console.log(arr);
let arr2 = arr.join(' ');
console.log(arr2);