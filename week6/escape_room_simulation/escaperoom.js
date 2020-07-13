var readlineSync = require('readline-sync');
//Ask the player to enter his/her name
const playerName = readlineSync.question("May I have your name? ");
const introText = `Welcome to our Escape Room, ${playerName}!`;
console.log(introText);

//Possibilities in game
let isAlive = true;
let alreadyHasKey = false;

while(isAlive == true) {
    const menuID = readlineSync.keyIn(` Press 1 to Put Hand in Hole \n Press 2 to Find the Key \n Press 3 to Open the Door: `,{limit: '$<1-3>'});
    if (menuID == 1) {
        //Put hand in hole
        console.log(`WOMP! Sorry, ${playerName}, you are DEAD!`);
        isAlive = false;
    }
    else if (menuID == 2 && alreadyHasKey == false) {
        //Find the key for the first time
        console.log(`Congratulations, ${playerName}, you have found the key!`);
        alreadyHasKey = true;
    }
    else if (menuID == 2 && alreadyHasKey == true) {
        //Find the key but already has it
        console.log(`${playerName}, you have already found the key!`);
    }
    else if (menuID == 3 && alreadyHasKey == false) {
        //Open the Door but does not have the key
        console.log(`${playerName}, you HAVE the key. Unlock the door and ESCAPE!`);
        alreadyHasKey = true;
    }
    else if (menuID == 3 && alreadyHasKey == true) {
        //Open the Door because they already have the key
        console.log(`${playerName}, you ALREADY have the key. Put it in the lock! The door is open NOW! YOU ESCAPED!`);
        isAlive = false;
    }
}