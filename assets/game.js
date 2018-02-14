var currentGuesses = [];
var categories = ["Board Games", "Tabletop RPGS", "Computer Games"];
var boardGames = ["arkham", "sorry"];
var tabletop   = ["remnants", "pathfinder"];
var computerGames = ["fortnite", "skyrim"];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedLetters = [];
var chosenWord;
var wrongGuesses = 0;
var guess;
var wrongLetters = [];
var rightLetters = [];
var gameRun = true;

//runs when page loads
window.onload = function(){
    //chooses random catagory
var chosenCategory = categories[Math.floor(Math.random() * categories.length)];

document.getElementById("category").innerHTML = chosenCategory.toString();

console.log(chosenCategory);

if (chosenCategory === "Board Games") {
    chosenWord = boardGames[Math.floor(Math.random() * boardGames.length)];    
}

else if (chosenCategory === "Tabletop RPGS"){
    chosenWord = tabletop[Math.floor(Math.random() * tabletop.length)];
}

else if (chosenCategory === "Computer Games"){
    chosenWord = computerGames[Math.floor(Math.random() * computerGames.length)];
}

else{
    console.log("Didn't Work");
}

var wordArray = chosenWord.split("");
console.log(chosenWord);
console.log(wordArray);

//create empty array the size of wordArray
var emptyWord =[];
    for (i=0; i<wordArray.length; i++){
        emptyWord.push("_");
    }

    var display = emptyWord[0];
    
    for (j=1; j<emptyWord.length; j++) {
     display = display + " " + emptyWord[j];
    } 
    console.log(display);

document.getElementById("theWord").innerHTML = display;

    document.onkeypress = function addGuess(event){
        
        var userGuess = event.key;

        if (alphabet.indexOf(event.key) >= 0){

            if(!guessedLetters.includes(userGuess) && !wordArray.includes(userGuess)) {
                guessedLetters.push(userGuess);
                wrongGuesses++;
                document.getElementById("currentGuesses").innerHTML = guessedLetters;
                
            }


        
        
        //Recognizes that the guess is part of the word
        for (i=0; i<wordArray.length;i++){
            if (userGuess.includes(chosenWord.charAt(i))){
                emptyWord[i] = userGuess;
                display = emptyWord.join(" ");
                document.getElementById("theWord").innerHTML = display; 
                
            }       
        } //end for loop
        
    } // end finding letter

        if(emptyWord.toString()===wordArray.toString()){
            document.getElementById("replay").innerText = "You won, refresh to play again!";
            
        }

        if (wrongGuesses===1){
            document.getElementById("hangman").src = "images/hangman1.png";
        }
        else if (wrongGuesses===2){
            document.getElementById("hangman").src = "images/hangman2.png";
        }
        else if (wrongGuesses===3){
            document.getElementById("hangman").src = "images/hangman3.png";
        }
        else if (wrongGuesses===4){
            document.getElementById("hangman").src = "images/hangman4.png";
        }
        else if (wrongGuesses===5){
            document.getElementById("hangman").src = "images/hangmanDead.png";
            document.getElementById("replay").innerText = "You lost, refresh to play again!";           
        }

        //end event bracket
        }


    //end document load
    }



