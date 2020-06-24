//Make a function that will return any given string into all caps followed by the same string all lowercase.
function capitalizeAndLowercase(str) {
    var upperAndLower = str.toUpperCase() + str.toLowerCase();
    return upperAndLower;
}
console.log(capitalizeAndLowercase("Hello"));
console.log("===========");

//Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function findMiddleIndex(str) {
    var middleOfString = Math.floor(str.length / 2);
    return "Output rounded down is: " + middleOfString;
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));
console.log("==========");

//Make a function that uses slice() and the other functions you've written to return the first half of the string.
function returnFirstHalf(str) {
    var middleOfString = Math.floor(str.length / 2);
    var halfOfString = str.slice(0, middleOfString);
    return halfOfString;
}
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));
console.log("==========");

//Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
function uppercaseAndLowercase(str) {
    var middleOfString = Math.floor(str.length / 2);
    var step1 = str.slice(0, middleOfString).toUpperCase();
    var step2 = str.slice(middleOfString).toLowerCase();
    return halfWay = step1 + step2;
}
console.log(uppercaseAndLowercase("Hello"));
console.log(uppercaseAndLowercase("Hello World"));
console.log("==========");

//Make a function that takes any string and capitalizes any character that follows a space.
function titleCase(str) { 
    var array = str.split(' ');
    var mapped = array.map(function(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return mapped.join(' ');
}
console.log(titleCase("hey friends! practice practice practice!"));
console.log("=======");
