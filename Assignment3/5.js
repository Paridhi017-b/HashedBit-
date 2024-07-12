/*Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.
*/
function correctfn(string,wrong,correct){
    return string.replace(wrong,correct)
}
let str = "This code is made using python";
let correctstr = correctfn(str,"python","javascript");
console.log(correctstr);