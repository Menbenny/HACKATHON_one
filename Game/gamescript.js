// const foodEnglish = ["Pizza", "Sushi", "Tacos", "Spaghetti", "Biryani", "Burger", "Fried Chicken", "Falafel", "Paella", "Kimchi","Apple", "Banana", "Orange", "Strawberry", "Mango", "Pineapple", "Grapes", "Blueberry", "Watermelon", "Kiwi", "Carrot", "Broccoli", "Spinach", "Cauliflower", "Bell Pepper", "Tomato", "Zucchini", "Eggplant", "Kale", "Cabbage"
// ]

// const foods_hebrew = ["פיצה", "סושי", "טאקוס", "ספגטי", "ביריאני", "המבורגר", "פרייד צ'יקן", "פלאפל", "פאייה", "קימצ'י","תפוח", "בננה", "תפוז", "תות שדה", "מנגו", "אננס", "ענבים", "אוכמניות", "אבטיח", "קיווי","גזר", "ברוקולי", "תרד", "כרובית", "פלפל", "עגבניה", "קישוא", "חציל", "כרוב עלים", "כרוב"
// ]

// // console.log(foodEnglish[6]);
// // console.log(foods_hebrew[6]);

// // Hangman logic attempt

// var userInput = prompt('Enter a word');

// if (foodEnglish.includes(userInput)) {
//     if (!isNaN(userInput)) {
//         alert(`Enter a valid word`)
//     } 
    
//     // while (foodEnglish[x] === foods_hebrew[x]) {

//     // }
// }
const foodEnglish = ["Pizza", "Sushi", "Tacos", "Spaghetti", "Biryani", "Burger", "Fried Chicken", "Falafel", "Paella", "Kimchi","Apple", "Banana", "Orange", "Strawberry", "Mango", "Pineapple", "Grapes", "Blueberry", "Watermelon", "Kiwi", "Carrot", "Broccoli", "Spinach", "Cauliflower", "Bell Pepper", "Tomato", "Zucchini", "Eggplant", "Kale", "Cabbage"];

    let word = '';
    let guessedLetters = [];

    function initializeGame() {
      // Reset variables
      word = getRandomWord(foodEnglish).toUpperCase();
      guessedLetters = [];

      // Display word with first letter revealed and other letters hidden
      let wordDisplay = word[0];
      for (let i = 1; i < word.length; i++) {
        if (word[i] === ' ') {
          wordDisplay += ' ';
        } else {
          wordDisplay += '_';
        }
      }
      document.getElementById('word').textContent = wordDisplay;

      // Display alphabet buttons
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let lettersHtml = '';
      for (let letter of alphabet) {
        lettersHtml += `<button onclick="checkLetter('${letter}')">${letter}</button>`;
      }
      document.getElementById('letters').innerHTML = lettersHtml;

      // Listen for keypress events
      document.addEventListener('keypress', function(event) {
        // Convert key press to uppercase letter
        let letter = String.fromCharCode(event.charCode).toUpperCase();
        // Check if the pressed key is a letter
        if (/[A-Z]/.test(letter)) {
          checkLetter(letter);
        }
      });
    }

    function getRandomWord(wordsArray) {
      return wordsArray[Math.floor(Math.random() * wordsArray.length)];
    }

    function checkLetter(letter) {
      if (guessedLetters.includes(letter)) {
        alert('You have already guessed this letter!');

        return;
      }

      guessedLetters.push(letter);
      let wordDisplay = word[0];
      let found = false;
      for (let i = 1; i < word.length; i++) {
        if (word[i] === letter) {
          wordDisplay += letter;
          found = true;
        } else if (word[i] === ' ') {
          wordDisplay += ' ';
        } else if (guessedLetters.includes(word[i])) {
          wordDisplay += word[i];
        } else {
          wordDisplay += '_';
        }
      }
      document.getElementById('word').textContent = wordDisplay;

      if (!found) {
        // Display the incorrect guess
        alert('Incorrect guess: ' + letter);
      }

      if (wordDisplay.indexOf('_') === -1) {
        // alert('Congratulations! You won!');

        // const document.createElement()
        var winningStatement = document.createElement('h1')
        winningStatement.textContent = `Congratulations, you have guess ${wordDisplay} corretly`;
        console.log(wordDisplay);
        initializeGame();
      }
    }

    function showHint() {
      alert('Hint: It\'s a type of food.');
    }

    initializeGame();