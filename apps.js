/* Guess the number
//TODO: Get user value from input and save it to variable numberGuess.
//TODO: Generate a random number 1 to 100 and save it to variable correctNumber
//TODO: Console wheather the guess is too high , too low, or is correct inside playGame function.
//TODO: Create a function called displayResult to move the logic to move the logic for if the guess is too high, too low, correct.
//TODO: If it is correct:

    Display congratulations message.
    Stop the player from being able to enter more guesses (this would mess the game up).
    Display control allowing the player to restart the game.

//TODO: If it is wrong and the player has turns left:

    Tell the player they are wrong and whether their guess was too high or too low.
    Allow them to enter another guess.
    Increment the turn number by 1.

//TODO: If it is wrong and the player has no turns left:

    Tell the player it is game over.
    Stop the player from being able to enter more guesses (this would mess the game up).
    Display control allowing the player to restart the game.

//TODO: Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
//TODO:
//TODO:
//TODO:
//TODO:
*/
let guesses = [];

let correctNumber = getRandomNumber();

console.log(correctNumber);
window.onload = function(){
    document.getElementById("check_box").addEventListener("click", playGame);
    document.getElementById("restart_box").addEventListener("click", initGame);
   
} 

//function for playing whole game

function playGame(){
 let numberGuess = document.getElementById("input_number").value;
    // console.log(numberGuess);
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}
///******************///
/*
// Show the result for if the guess is too high, too low, or correct
*/
function displayResult(numberGuess){
    if(numberGuess>correctNumber){
        document.getElementById("result").innerHTML = "too high";
    }else if (numberGuess < correctNumber){
        document.getElementById("result").innerHTML = "too low";
    }else if (numberGuess == correctNumber){
        document.getElementById("result").innerHTML = "you have gussed correct.";
    }else{
        document.getElementById("result").innerHTML = "please enter a value";
    }
}





// Reset the HTML content for guess history
function resetResultContent(){
    document.getElementById("restart_box").innerHTML = "";
}
///********************///

// Return a random number between 1 and 100
function getRandomNumber(){
    let randomNum = Math.floor((Math.random()*100) + 1);
    return randomNum;
}
///************************///

function saveGuessHistory(guess){
    guesses.push(guess);
    console.log(guesses);
}

function displayHistory(){
    let index = guesses.length - 1;
    let list = "<ul class = 'list-group'>";
    while(index >= 0){
        list += "<li class = 'list-group-item'>" +
        "you guessed: " + guesses[index] + "</li>";
        index--;
    }
    list+= "</ul>";
    document.getElementById("history").innerHTML = list;
}


function initGame(){
    correctNumber = getRandomNumber();
    guesses = [];
    displayHistory();
    displayResult();
    document.getElementById("input_number").value = "guess it...";
}