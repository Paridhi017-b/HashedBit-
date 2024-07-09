//Write a function to perform this. 
//You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. 
//So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

let n1=12;
let n2=21;
function solve(n1,n2){
    let output;
    output=(parseInt(n1/10)*parseInt(n2/10))+((n1%10)*(n2%10));
    console.log(output);
}
solve(n1,n2)