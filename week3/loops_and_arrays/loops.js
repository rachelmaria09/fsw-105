//one
var peopleWhoWantToSeeMadMaxFuryRoad = [
   {
    name: "Mike",
    age: 12,
    gender: "male"
   },{
    name: "Madeline",
    age: 80,
    gender: "female"
   },{
    name: "Cheryl",
    age: 22,
    gender: "female"
   },{
    name: "Sam",
    age: 30,
    gender: "male"
   },{
    name: "Suzy",
    age: 4,
    gender: "female"
   }
]

function isOldEnough() {
    for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("old enough");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 0 && peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log("not old enough");
        }
    }
}

isOldEnough();
console.log("============");

//two
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
     name: "Mike",
     age: 12,
     gender: "male"
    },{
     name: "Madeline",
     age: 80,
     gender: "female"
    },{
     name: "Cheryl",
     age: 22,
     gender: "female"
    },{
     name: "Sam",
     age: 30,
     gender: "male"
    },{
     name: "Suzy",
     age: 4,
     gender: "female"
    }
 ]

function personalizedMessage() {
    for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 0 && peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.");
        }
    }
}
personalizedMessage();
console.log("============");

//three
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
     name: "Mike",
     age: 12,
     gender: "male"
    },{
     name: "Madeline",
     age: 80,
     gender: "female"
    },{
     name: "Cheryl",
     age: 22,
     gender: "female"
    },{
     name: "Sam",
     age: 30,
     gender: "male"
    },{
     name: "Suzy",
     age: 4,
     gender: "female"
    }
 ]

 function messageAndGender() {
    for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        var pronoun = "";
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male")
            pronoun = "him";
        else
            pronoun = "her";

        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Please allow " + pronoun + " admission to the movie.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 0 && peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. Do not allow " + pronoun + " admission to the movie.");
        }
    }
}
messageAndGender();
console.log("============");

//four
function zeroToOneHundred() { 
    for(var i = 0; i < 100; i++) {
        if(i % 2 === 0)
            console.log("Even");
        else
        console.log("Odd");
    }
}
zeroToOneHundred();
console.log("============");