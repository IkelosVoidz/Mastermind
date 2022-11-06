var username;
var wins, loses;
var round;
var randomToGuess;
var nEncerts;
var nExistents;

function startGame(){
    var x = document.getElementById("playerInf");
    var y = document.getElementById("game");
   
    x.style.display = "none";
    y.style.display = "flex";

    username = document.getElementById("fname").value;
    
    wins = 0;
    loses = 0;
    round = 1;
    document.getElementById("score").innerHTML = username + "<br> Wins: " + wins + ", Loses: "+ loses;
    
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
    //INPUT
    var guessInp = document.getElementById("guessInput");
    var guessValue = guessInp.value;
    guessInp.value = "";
    if((guessValue.length < 4) || (guessValue.length > 4)){
        alert("Guess must be 4 digits long!!!");
    } 
    else{
        
        //OMPLIR TAULA
        var table = document.getElementById("gameTable");
        var row = table.insertRow();
        var cells = new Array(8);
        for (let i = 0; i < 8; i++) {
            var cell = row.insertCell(i); 
            if(i < 4){
                var squareSpan = document.createElement('SPAN');
                squareSpan.setAttribute("class", "digit");
                cell.appendChild(squareSpan);
            } 
            cells[i] = cell;
        }

        for (let i = 0; i < 4; i++) {
            cells[i].children[0].innerHTML = guessValue[i];    
        }
        
        //LOGICA
        nExistents = 0;
        nEncerts = 0;
        var existeix = false;
        for (let i = 0; i < 4; i++) {
            if (guessValue[i] == randomToGuess[i]){
                nEncerts++;
                existeix = true;
            } 
            for (let j = 0; j < 4; j++) {
                if ((guessValue[j] == randomToGuess[i]) && (existeix == false)){
                    nExistents++;
                    break;
                }
            }
            existeix = false;
        }

        cells[5].innerHTML = nEncerts;
        cells[7].innerHTML = nExistents;

        //TICKS VERD I GROC
        var greenSpan = document.createElement('SPAN');
        greenSpan.setAttribute("class", "tick");
        greenSpan.innerHTML = "&#10004";
        greenSpan.style.background="PaleGreen";
        cells[4].appendChild(greenSpan);
        cells[4].style.padding = "0px 0px 0px 15px";
    
        var yellowSpan = document.createElement('SPAN');
        yellowSpan.setAttribute("class", "tick");
        yellowSpan.innerHTML = "&#10004";
        yellowSpan.style.background="Gold";
        cells[6].appendChild(yellowSpan);

        round++;
        if(round == 11 || nEncerts == 4){
            endRound(table);
        }
        document.getElementById("roundCount").innerHTML = "Round " + round;
    } 
}

function endRound(tb){

    round = 1;
    if(nEncerts < 4){
        loses++;
        alert("You suck, " + username);
    }
    else{
        wins++;
        alert("Congratulations " + username + "!!!");
    }

    nEncerts = 0;
    nExistents = 0;

    console.log(tb.rows.length);
    var nRows = tb.rows.length;
    for (let p = nRows; p > 1; p--) {
        tb.deleteRow(p-1);
        console.log(p-1);
    }

    document.getElementById("score").innerHTML = username + "<br> Wins: " + wins + ", Loses: "+ loses;
    randomToGuess = randomNumber();
    console.log(randomToGuess);
}

    
    