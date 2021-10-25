//setting up the initial health and attack for player's robot
var playerName = window.prompt("What is your Robot's Name?");
var playerHealth = 100;
var playerAttack = 10;

//Base info for the enemy robot
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators " + playerName + "!  The fight has begun!!");

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
};

fight();


