//Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(10, 5);
console.log(result);
console.log("========");

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
var num = [1, 2, 3];
function  threeNumbers(num1, num2, num3) {
    return Math.max.apply(null, num);
}
console.log(threeNumbers(num));
console.log("==========");

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function isEven(num) {
    if(num % 2 == 0)
        console.log("even")
    else {
        console.log("odd");
    }
}
isEven(5);
console.log("=========");

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function stringParameter(str) {
    if(str.length <= 20)
        //console.log("HelloHello")
    else
        //console.log("Hel");
}
stringParameter("Hello");
console.log("==========");