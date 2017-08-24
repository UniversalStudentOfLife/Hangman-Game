
//Global Variables
var randomWord;
var wordList1 = ["squirtle", "charmander", "bulbasaur", "pikachu"];
var userWins = -1; 
var remainingGuesses = 10; //come back later to do math based on how long the word is, give an additional 5 guesses
var underscoredWord;
var Userkey;
var wordsGuessed = "";

// Capture the user's key 

document.onkeyup = function(event) {
	var userKey = event.key;
	userKey = userKey.toLowerCase();

    if(chosenWord.toLowerCase().indexOf(userKey.toLowerCase()) === -1){

    	if (remainingGuesses == 0 && wordsGuessed === document.getElementById("currentWord").innerText) {

    		increaseWins(userWins);
    		console.log(userWins);
    	}

    	    
        if(remainingGuesses == 0){
	
			randomizer(wordList1);
			userWins = 0;
          	remainingGuesses = 10;
          	$("#lettersGuessed").text("");
          	$("#userWins").text(userWins);

         }else{

           //remainingGuesses--;
         }
    }


	//Run check to see if user guessed this letter already.
	if (wordsGuessed.includes(userKey)) {

		//do nothing
		//alert("you already pressed that key!"

	} else {

		increaseWins(userWins);
		remainingGuesses--;
		$("#remainingGuesses").text(remainingGuesses);
		wordsGuessed += userKey; 
		$("#lettersGuessed").append(userKey+", ");
		console.log(wordsGuessed);

		//alert("new letter! Yay!")
	}

	checkCharacter(userKey);
	console.log(userKey)
}

	function increaseWins(){
	  userWins++;
	  return userWins;
	}


//Randomly picks a word out of the array that is passed to the function.
 function randomizer (arr) {

	randomGeneratedWord = Math.floor(Math.random() * (arr.length));
	chosenWord = arr[randomGeneratedWord];
	underscoredWord = chosenWord.replace(/./gi,"_");

	console.log(chosenWord);
	console.log(underscoredWord);
}


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

// Change character to selected one
function checkCharacter(n) {
	for(i = 0; i < chosenWord.length; i++){
  		
  		if(chosenWord[i].toLowerCase() == n.toLowerCase()){

    	underscoredWord = setCharAt(underscoredWord,i,n);

    	}
  }

  $("#currentWord").text(underscoredWord);
  if(underscoredWord == chosenWord) {
  	
  	randomizer(wordList1);
    remainingGuesses = 10;
    $("#remainingGuesses").text(remainingGuesses);
  }
}


randomizer(wordList1);
