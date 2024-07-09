//Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(a,b,operator){
    let output;
    switch(operator){
        case'1':{
            output=a+b;
            console.log(output);
            break;
        }
        case'2':{
            output=a-b;
            console.log(output);
            break;
        }
        case'3':{
            output=a*b;
            console.log(output);
            break;
        }
        case'4':{
             output=a/b;
             console.log(output);
             break;
                }
        default:
            console.log('Invaild operator');
            
        }
    }
    calculate(11,4,'1')
    calculate(8,4,'2')
    calculate(12,4,'3')
    calculate(14,7,'4')
    calculate(11,4,'8')

