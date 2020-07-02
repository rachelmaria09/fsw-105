//1
let name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
};

runForLoop(["cat", "dog"]);
console.log("=====");

//2
const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = arr => {
    return arr.map(carrot => {
        return {type: carrot}
    })
}
console.log(mapVegetables(carrots));
console.log("=====");

//3
const people = [
    { name: "Princess Peach", friendly: false },
    { name: "Luigi", friendly: true },
    { name: "Mario", friendly: true },
    { name: "Bowser", friendly: false}
];

function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
};
console.log("=====");

//4
function doMathSum(a, b) {
    return a + b
}
var produceProduct = function(a, b) {
    return a * b
};
console.log("=====");

//5

console.log("=====");

//6

console.log("=====");

//7
const animals = [
    { type: "dog", name: "theodore" },
    { type: "cat", name: "whiskers" },
    { type: "pig", name: "piglette" },
    { type: "dog", name: "sparky" }
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
};
console.log("=====");

//8

console.log("=====");