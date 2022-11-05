var username;
var wins = 0, loses = 0;
var round;

function startGame(){
    var x = document.getElementById("playerInf");
    var y = document.getElementById("game");
   
    x.style.display = "none";
    y.style.display = "block";

    var playerName = document.getElementById("fname");
    username = playerName.value;


}