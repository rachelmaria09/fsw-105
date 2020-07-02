//1
const manName = "John"
let name = "spot"
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
    console.log("man name: ", manName)
    return petObjects
};

runForLoop(["cat", "dog"]);
console.log("=====");

//2
const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = arr => {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    });
};
console.log(mapVegetables([carrots]));
console.log("=====");

//3
const people = [
    { name: "Princess Peach", friendly: false },
    { name: "Luigi", friendly: true },
    { name: "Mario", friendly: true },
    { name: "Bowser", friendly: false}
];

const filterForFriendly = people.filter(people => people.friendly);
console.log(filterForFriendly);
console.log("=====");

//4
/*const doMathSum = sum((a, b) => a + b);

const produceProduct = multiply((a, b) => a * b);

console.log("=====");*/

//5
const user = {
    firstName: "Jane",
    lastName:  "Doe",
    age: 100
}

//const printString = user.toString("Hi " + user.firstName + user.lastName + ", how does it feel to be " + user.age + "?")
console.log("Hi " + (user.firstName + " " + user.lastName) + " , how does it feel to be " + (user.age) + "?");
console.log("=====");

//6
console.log(`Hi ${user.firstName} ${user.lastName}, how does it feel to be ${user.age}?`)
console.log("=====");

//7
const animals = [
    { type: "dog", name: "theodore" },
    { type: "cat", name: "whiskers" },
    { type: "pig", name: "piglette" },
    { type: "dog", name: "sparky" }
];
const filterForDogs = animals.filter(animal => animal.type === "dog");
console.log(filterForDogs);
console.log("=====");

//8
const guest = {
    location: "Hawaii",
    name: "Janice"
}
console.log(`Hi ${guest.name}!

Welcome to ${guest.location}.

I hope you enjoy your stay. Please ask the president of ${guest.location} if you need anything.`)
console.log("=====");