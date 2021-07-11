 import { question } from "readline-sync";

 function main():void{
    const firstStr:string = question("Enter First Number:\n");
    const operator:string = question("Enter Operator:\n");
    const secondStr:string = question("Enter Second Number:\n");
    
    const validInput:boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    
    if(!validInput){
        console.log("Invalid Input!");
    }
    const firstNum:number = parseInt(firstStr);
    const secondNum:number = parseInt(secondStr);
    const result:number = caculate(firstNum, operator, secondNum)
    console.log("result: " + result)
}

function caculate(firstNum:number, operator:string, secondNum:number){
    switch(operator){
        case "+": return firstNum+secondNum;
        case "-": return firstNum-secondNum;
        case "*": return firstNum*secondNum;
        case "/": return firstNum/secondNum;
    }
}

function isOperator(str:string):boolean{
    switch(str){
        case '+':
        case '*':
        case '-':
        case '/':
            return true;
        default:
            return false;
    }
}

function isNumber(str: string):boolean{
    const maybeNum = parseInt(str); 
    const isNum:boolean =!isNaN(maybeNum);
    return isNum;
}

 main()