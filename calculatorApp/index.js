"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = readline_sync_1.question("Enter First Number:\n");
    var operator = readline_sync_1.question("Enter Operator:\n");
    var secondStr = readline_sync_1.question("Enter Second Number:\n");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (!validInput) {
        console.log("Invalid Input!");
    }
    var firstNum = parseInt(firstStr);
    var secondNum = parseInt(secondStr);
    var result = caculate(firstNum, operator, secondNum);
    console.log("result: " + result);
}
function caculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+": return firstNum + secondNum;
        case "-": return firstNum - secondNum;
        case "*": return firstNum * secondNum;
        case "/": return firstNum / secondNum;
    }
}
function isOperator(str) {
    switch (str) {
        case '+':
        case '*':
        case '-':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
