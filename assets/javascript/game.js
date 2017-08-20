
// function 



//var userKey = event.key; 
var randomWord;
var wordList1 = ["squirtle", "charmander", "bulbasaur", "pikachu"];
var userWins = 0; 
var remainingGuesses = 0;





//var randomWord = wordList1[Math.floor(Math.random() * wordList1.length)];

//alert(randomWord);


document.addEventListener("keyup", printKey);


// Key Capture 
function printKey(event) {

	 userKey = event.key;

	alert("You pressed key: " + userKey);


	return userKey;
}


function randomizer (array) {

	myArray = array; 

	randomSelectedWord = myArray[Math.floor(Math.random() * myArray.length)];

	return randomSelectedWord;
}


function blankCreator (randomWord) {


for (var i = 0 < randomWord.length; i++) {

	blankString += "_"

	alert(blankString);	

}





 randomWord = randomizer(wordList1); 

alert(randomWord);