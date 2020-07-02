//section a

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1
/*function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num) {
        if(num >= 5) {
            return true;
        };
    });
    return result;
};*/
//es6
const fiveAndGreaterOnly = arr.filter(num => num >= 5);
console.log("All numbers listed are equal to or greater than five " + fiveAndGreaterOnly + ".");
console.log("======");

//2
/*function evensOnly(arr) {
    const result = arr.filter(function(num) {
        if (num % 2 == 0) {
            return true;
        };
    });
};*/

//es6
const evensOnly = arr.filter(num => num % 2 === 0);
console.log("All numbers listed are only even " + evensOnly + ".");
console.log("======");

//3 - extra credit
/*const people = people.filter(function(people) {
    if(people.age >= 17) {
        return people
    };
});*/

//es6
const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
]

const ofAge = people.filter(people => people.age >= 17 );
console.log(ofAge);
console.log("======");

//section b

//1

/*function doubleNumbers(arr2) {
    const result = arr2.map(function(num) {
        return num * 2;
    });
    return result;
};*/

//es6
const arr2 = [3, 6, 8, 2]

const doubleNumbers = arr2.map(num => num * 2)
console.log("All numbers listed are doubled " + doubleNumbers + ".");
console.log("======");

//2

/*function stringItUp(arr2){
    const result = arr2.map(function(num){
        return num.toString();
    });
    return result
};*/
//es6
const stringItUp = arr2.map(num => num.toString())
console.log("The numbers are now listed as a string " + stringItUp + ".");
console.log("======");

//3

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

/*const result = names.map(function(name) {
    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
})
console.log(result);*/

//es6
const capitalizeNames = names.map(name => name.charAt(0).toUpperCase() + name.substr(1).toLowerCase());
console.log("The names are appropriately capitalized " + capitalizeNames + ".");
console.log("======");

//4 - extra credit

const users = [
{ name: "Angelina Jolie", age: 80 },
{ name: "Eric Jones", age: 2 },
{ name: "Paris Hilton", age: 5 },
{ name: "Kanye West", age: 16 },
{ name: "Bob Ziroll", age: 100 },
]

/*const result = users.map(function(user) {
    return user.name 
});*/

//es6
const namesOnly = users.map(user => user.name);
console.log("Only the names are listed " + namesOnly + ".");
console.log("======");

//section c

//1
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*function total(arr3) {
    const result = arr3.reduce(function(final, num) {
        final = final + num;
        return final;
    });
    return result;
};*/

//es6
const total = arr3.reduce(function(final, num){
    final += num
    return final
});
console.log("The sum of the array is " + total + ".");
console.log("======");

//2

//es6
function stringConcat(arr3) {
    const result = arr3.reduce(function(final, num) {
        final = final + num.toString();
        return final;
    });
    return result;
};

console.log("The array of numbers is now a string " + stringConcat(arr3) + ".");
console.log("======");

//3
//es6
const voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false}
]

const totalVotes = voters.reduce(function(final, voter) {
    if(voter.voted) {
        final.didVote++
    } else {
        final.didNotVote++
    }
    return final
}, { didVote: 0, didNotVote: 0 });
console.log(totalVotes);
console.log("======");

//section d
//es6

const arr4 = [1, 3, 5, 2, 90, 20]

//1
arr4.sort(function(a, b) {
    return a - b
});
console.log("Array listed from smallest number to largest number " + arr4 + ".");
console.log("=========");

//2
arr4.sort(function(a, b) {
    return b - a
});
console.log("Array listed from largest number to smallest number " + arr4 + ".");
console.log("=========");

//3
const words = ["dog", "wolf", "by", "family", "eaten"]

const lengthSort = words.sort(function(a, b) {
    return a.length - b.length
});
console.log("Array listed from shortest string to longest string " + lengthSort + ".");
console.log("=========");
