

const foodEnglish = [
  "Pizza", "Sushi", "Tacos", "Spaghetti", "Biryani", "Burger", "Fried Chicken", "Falafel", "Paella", "Kimchi",
  "Apple", "Banana", "Orange", "Strawberry", "Mango", "Pineapple", "Grapes", "Blueberry", "Watermelon", "Kiwi", 
  "Carrot", "Broccoli", "Spinach", "Cauliflower", "Bell Pepper", "Tomato", "Zucchini", "Eggplant", "Kale", "Cabbage"
];

const foodsHebrew = [
  "פיצה", "סושי", "טאקוס", "ספגטי", "ביריאני", "המבורגר", "פרייד צ'יקן", "פלאפל", "פאייה", "קימצ'י",
  "תפוח", "בננה", "תפוז", "תות שדה", "מנגו", "אננס", "ענבים", "אוכמנית", "אבטיח", "קיווי",
  "גזר", "ברוקולי", "תרד", "כרובית", "פלפל", "עגבניה", "קישוא", "חציל", "כרוב עלים", "כרוב"
];

let word = '';
let guessedLetters = [];
let wordIndex;

// document.addEventListener('DOMContentLoaded', () => {
//   const userName = localStorage.getItem('userName');
//   if (userName) {
//     document.getElementById('displayInput').textContent = userName;
//   } else {
//     document.getElementById('displayIntput').textContent = `Player 1`
//   }
// })

const playerName = localStorage.getItem('userName');
        
// Display player name using DOM
const playerNameElement = document.getElementById('displayInput');
playerNameElement.textContent = `${playerName}`;







// ##########################

function initializeGame() {
  // Reset variables
  wordIndex = Math.floor(Math.random() * foodEnglish.length);
  word = foodEnglish[wordIndex].toUpperCase();
  guessedLetters = [];

  // Display word with first letter revealed and other letters hidden
  let wordDisplay = word[0];
  for (let i = 1; i < word.length; i++) {
    if (word[i] === ' ') {
      wordDisplay += '  ';
    } else {
      wordDisplay += '_ ';
    }
  }
  document.getElementById('word').textContent = wordDisplay;

  // Clear previous hint, win message, and options
  document.getElementById('hintContainer').innerHTML = '';
  document.getElementById('winMessage').textContent = '';
  document.getElementById('options').innerHTML = '';

  // Remove previous event listener to avoid duplicates
  document.removeEventListener('keydown', handleKeyPress);

  // Listen for keydown events
  document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  let letter = event.key.toUpperCase();
  // Check if the pressed key is a letter
  if (/[A-Z]/.test(letter)) {
    checkLetter(letter);
  }
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
    alert('Incorrect guess: ' + letter);
  }

  if (wordDisplay.indexOf('_') === -1) {
    const winMessage = document.createElement('h1');
    winMessage.textContent = `Congratulations, you have guessed ${wordDisplay} correctly! Now, match it with the correct Hebrew translation.`;
    document.getElementById('winMessage').appendChild(winMessage);
    setTimeout(showOptions, 1000); // Wait 1 second before showing options
  }
}

function showHint() {
  let hint = '';
  if (wordIndex >= 0 && wordIndex < 10) {
    hint = 'Hint: It\'s a type of dish.';
  } else if (wordIndex >= 10 && wordIndex < 20) {
    hint = 'Hint: It\'s a type of fruit.';
  } else if (wordIndex >= 20 && wordIndex < 30) {
    hint = 'Hint: It\'s a type of vegetable.';
  }

  // Create a div with class "Hint" and a child p element with the hint message
  const hintContainer = document.getElementById('hintContainer');
  const hintDiv = document.createElement('div');
  hintDiv.className = 'Hint';
  const hintParagraph = document.createElement('p');
  hintParagraph.textContent = hint;
  hintDiv.appendChild(hintParagraph);
  hintContainer.appendChild(hintDiv);

  // Set timeout to remove the hint after 5 seconds
  setTimeout(() => {
    hintContainer.removeChild(hintDiv);
  }, 5000);
}

// function levelTwo () {

  function showOptions() {
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  // Generate three random options, one of which is correct
  let correctOption = foodsHebrew[wordIndex];
  let options = [correctOption];
  while (options.length < 3) {
    let randomIndex = Math.floor(Math.random() * foodsHebrew.length);
    let randomOption = foodsHebrew[randomIndex];
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }

  // Shuffle the options array
  options = options.sort(() => Math.random() - 0.5);

  // Create buttons for each option
  options.forEach(option => {
    let button = document.createElement('button');
    button.textContent = option;
    button.className = 'option';
    button.onclick = () => checkOption(option);
    optionsContainer.appendChild(button);
  });
}

// showOptions()

  function checkOption(selectedOption) {
    if (selectedOption === foodsHebrew[wordIndex]) {
      alert('Correct! You matched the English word with its Hebrew translation.');
      initializeGame();
    } else {
      alert('Incorrect. Try again.');
      showOptions();
    }
    
  }


initializeGame();