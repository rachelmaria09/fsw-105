var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please enter your first number:");
var secondNum = readlineSync.questionInt("Please enter your second number:");
var enteredOperator = readlineSync.question("Select the operation you would like to perform: +, -, *, /");

function addTwoNumbers(num1, num2) {
    return("Adding the first number: " + num1 + " with the second number: " + num2 + " will equal: " + (num1 + num2));
}

function subtractTwoNumbers(num1, num2) {
    return("Subtracting the first number: " + num1 + " from the second number: " + num2 + " will equal: " + (num1 - num2));
}

function multiplyTwoNumbers(num1, num2) {
    return("Multiplying the first number: " + num1 + " with the second number: " + num2 + " will equal: " + (num1 * num2));
}

function divideTwoNumbers(num1, num2) {
    return("Dividing the first number: " + num1 + " by the second number: " + num2 + " will equal: " + (num1 / num2));
}

if(enteredOperator == "+") {
    console.log(addTwoNumbers(firstNum, secondNum));
} else if(enteredOperator == "-") {
    console.log(subtractTwoNumbers(firstNum, secondNum));
} else if(enteredOperator == "*") {
    console.log(multiplyTwoNumbers(firstNum, secondNum));
} else if(enteredOperator == "/")
    console.log(divideTwoNumbers(firstNum, secondNum));