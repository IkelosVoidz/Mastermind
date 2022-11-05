var username;
var wins, loses;
var round;
var randomToGuess;

function startGame(){
    var x = document.getElementById("playerInf");
    var y = document.getElementById("game");
   
    x.style.display = "none";
    y.style.display = "block";

    username = document.getElementById("fname").value;
    
    document.getElementById("playerName").innerHTML = username;
    wins = 0;
    loses = 0;
    round = 1;
    
    randomToGuess = randomNumber();
    console.log(randomToGuess);
}

function randomNumber(){
    var validNumber = false;
    var rand = Math.floor(Math.random() * 10);
    var returnNumber = '';
    while(!validNumber){
        //console.log( "Random number: " + rand);
        if(checkForValidNumber(rand,returnNumber) == true){
            returnNumber = returnNumber + rand;
            if(returnNumber.length == 4){
                validNumber = true;
            }
        }
        else rand = Math.floor(Math.random() * 10);
    }
    return returnNumber;
}

function checkForValidNumber(randToCheck,number){
    for (let i = 0; i < number.length; i++) {
        if(randToCheck == number[i]){
            return false;
        } 
        console.log("Digit " + i + ": " + number[i] + "Random numb: " + randToCheck);
    }
    return true;
}

function guess(){

    var guessInp = getElementById("guessInput").value;

}
    