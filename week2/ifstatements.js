//preliminaries

//one
if(5 > 3){
    console.log("is greater than")
}

//two
var strCat = "cat";
if(strCat.length) {
   console.log("is the length")
} else {
    console.log("is not the length")
}

//three
var strCat = "cat";
var strDog = "dog";
if(strCat.length == strDog.length)
    console.log("length of cat and dog are equal");
else
    console.log("length of cat and dog are not the same");

//bronze medal

//one
let age = 18;

let person = {
    name: 'Bobby',
    age: 12
};

if(person.age >= 18) {
    console.log(person.name + ' is admited to the theater.');
} else {
    console.log(person.name + ' is not admited to the theater.')
};

console.log(person)
console.log(person.name)
console.log(person.age);

//two
if(person.name.charAt(0) === 'B') {
    console.log(person.name + ' is admited to the theater.');
} else {
    console.log(person.name + 'is not admited to the theater.')
;}

//three
if(person.name.charAt(0) === 'B' && person.age >18) {
    console.log(person.name + ' is admited to the theater.');
} else {
    console.log(person.name + 'is not admited to the theater.')
};

//silver medal

//one
if(1 === 1) {
    console.log('strict')
} else if(1 == 1) {
    console.log('abstract')
} else('not equal at all');

//two
if(1 <= 2 && 2 === 4) {
    console.log('yes')
} else {
    console.log('no')
}