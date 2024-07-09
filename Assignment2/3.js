/*You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. 
You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.
if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary. */

function findTax(salary){
    let tax;
    switch(true){
        case salary > 0 && salary <= 50000 :{
            tax=salary*0;
            console.log(tax+','+'0% tax on the entire salary');
            break;   
             }
        case salary > 500000 && salary <= 1000000 :{
            tax=salary*0.1;
            console.log(tax+','+'  10% tax on the entire salary');
            break;
        }
        case  salary > 1000000 && salary <= 1500000 :{
            tax=salary*0.2;
            console.log(tax+','+'20% tax on the entire salary');
            break;
        }
        case salary > 1500000 :{
            tax=salary*0.3;
            console.log(tax+','+'30% tax on the entire salary');
            break;
        }
        default:{
            console.log('Enter the vaild salary');
        }
    }
}
findTax(5000);
findTax(600000);
findTax(1200000 );
findTax(1800000);
findTax(-80000);