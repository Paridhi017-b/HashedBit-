//Write a function to count the number of words in a paragraph.
function count(paragraph){
  return paragraph.split(' ').filter(word => word.length>0).length;
}
let paragraph = "Software development is the process of computer programming, documenting, testing and bug fixing involved in creating and maintaining applications and frameworks involved in a software release life cycle and resulting in a software product.";
console.log(count(paragraph));