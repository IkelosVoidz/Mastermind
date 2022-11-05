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
    }
    return true;
}

function guess(){

    var guessInp = document.getElementById("guessInput").value;

    

    var table = document.getElementById("gameTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1); 
    var cell3 = row.insertCell(2); 
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);  
    var cell6 = row.insertCell(5); 
    var cell7 = row.insertCell(6); 
    var cell8 = row.insertCell(7); 

    cell1.innerHTML = guessInp[0];
    cell2.innerHTML = guessInp[1];
    cell3.innerHTML =  guessInp[2];
    cell4.innerHTML =  guessInp[3];

    //FALTA LOGICA DEEE CONTAR QUANTS ENCERTS HI HAN I ESO

    var greenSpan = document.createElement('SPAN');
    greenSpan.setAttribute("id", "tick");
    greenSpan.innerHTML = "&#10004";
    greenSpan.style.background="PaleGreen";
    cell5.appendChild(greenSpan);
    cell5.style.padding = "0px 0px 0px 15px";

    var yellowSpan = document.createElement('SPAN');
    yellowSpan.setAttribute("id", "tick");
    yellowSpan.innerHTML = "&#10004";
    greenSpan.style.background="Gold";
    cell7.appendChild(yellowSpan);
}

    
    