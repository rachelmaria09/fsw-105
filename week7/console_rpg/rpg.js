var readlineSync = require('readline-sync');

const player = readlineSync.question('Who will be entering into the wild world of RPG? ');

readlineSync.question('Welcome ' + player + ', Can you defeat evil? Press enter if you are willing to risk it all!');

const enemies = ['Ghoul', 'Goblin', 'Ghost'];
const reward = ['Armor', 'Magic', 'Sword'];
var prize = [];
let playerHealth = 100;
const move = ['Walk', 'Exit', 'Print'];
let findReward = reward[Math.floor(Math.random()*reward.length)];

function rpg() {
    const attackPower = Math.floor(Math.random()*(4-2+1)+1);
    const enemy = enemies[Math.floor(Math.random()*enemies.length)];
    let enemyHealth = 100;
    const enemyPower = Math.floor(Math.random()*(5-1+3)+2);

    const firstMove = readlineSync.keyInSelect(move, 'Make your next move!');

    if(move[firstMove] == 'Walk') {
        let key=Math.random();
        if(key<= .3) {
            console.log('Walking...');
        } else if (move[firstMove] == 'Exit') {
            return playerHealth = 0;
        } else if (move[firstMove] == 'Print') {
            console.log('player: ' + player + '\n' + 'Health: ' + playerHealth + '\n' + 'Rewards: ' + findReward);
        } else if (key >= .3) {
            console.log(enemy + ' is here to battle!');
            while(enemyHealth > 0 && playerHealth > 0) {
                const user = readlineSync.question('Are you brave enough to fight? Press a \n if not, then run! Press r!');

                switch(user) {
                    case 'a' : 
                    enemyHealth-= attackPower;
                    console.log('Very brave to attack ' + enemy + ' with ' + attackPower + ' attack power!');

                    playerHealth -= enemyPower;
                    console.log('The enemy just attacked you with ' + enemyPower + ' strenth!');

                    if(enemyHealth <= 0) {
                        console.log('You defeated ' + enemy + '! \n' + enemy + ' still remains' + findReward);
                        let steal = Math.random();
                        if(steal <= .3) {
                            prize.push(findReward);
                        }
                    } else if(playerHealth <=0) {
                        console.log(enemy + ' has been deemed VICTORIOUS! That is the end for you!');
                    }
                    case 'r': 
                    const run = Math.random();
                    if(run<.5) {
                        console.log('Oh no! Too late to run!' + enemy + ' has found you and has ' + enemyPower + "!");
                    } else {
                        console.log('You ran away.. barely escaped with your life!');
                        break;
                    }
                }
            }
        }
    }
}
while(playerHealth > 0) {
    playerRestore = function() {
        playerActive = true;
        playerHealth = 100;
    };
    playerRestore();
    rpg();
}