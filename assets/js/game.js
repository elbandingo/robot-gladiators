//setting up the initial health and attack for player's robot
var playerName = window.prompt("What is your Robot's Name?");
var playerHealth = 100;
var playerAttack = 10;
playerMoney = 10;

//Base info for the enemy robot
var enemyNames = ["Roborto", "Amy Andropod", "Robo Bobo"];
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators " + playerName + "!");

var fight = function(enemyName) {
    var promptFight = window.prompt(playerName + ", Would you like to Fight or Skip this battle?");
    // if a player chooses to fight, then fig
    if (promptFight === "FIGHT" || promptFight === "fight" || promptFight === "Fight"){
        window.alert("Welcome to Robot Gladiators " + playerName + "!  The fight is about to begin!!");

        //Subtract the value of playerAttack from enemyHealth. use the result to update enemyHealth
        enemyHealth = enemyHealth - playerAttack;
    
        //log a result to the log in console, check to see if they are still alive
        console.log (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " hit points left!");
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left!");
        }
        //Subtract the value of enemyAttack from playerHealth. use the result to update playerHealth
        playerHealth = playerHealth - enemyAttack;
        //log a result to console
        console.log(enemyName + " attacked " + playerName +". " + playerName + " now has " + playerHealth + " hit points left");
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left!");
        }
    }

    else if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {

        //confirm player actually wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes leave fight
    if (confirmSkip) {
        playerMoney = playerMoney - 2;
        window.alert("2 Gold removed for skipping fight, wimp!!");
    }

    //if no, ask question again by running fight again
    else {
        fight();
    }

        window.alert(playerName + " has decided to skip the fight!");


    } else {
        window.alert("you need to choose a valid option, try again!");
        fight();
    }

};

for(var i = 0; i <enemyNames.length; i++) {
    fight(enemyNames[i]);
}


