var username;
var wins, loses;
var round;

function startGame(){
    var x = document.getElementById("playerInf");
    var y = document.getElementById("game");
   
    x.style.display = "none";
    y.style.display = "block";

    var playerName = document.getElementById("fname");
    username = playerName.value;

    document.getElementById("playerName").innerHTML = username;
    wins = 0;
    loses = 0;
    round = 1;
}

function guess(){

    var guessInp = getElementById("guessInput").value;
}
    