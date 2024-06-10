

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



// global 
let word = '';
let guessedLetters = [];
let wordIndex;

const playerName = localStorage.getItem('userName');
        

const playerNameElement = document.getElementById('displayInput');
playerNameElement.textContent = `${playerName}`;

playerNameElement.style.color = '#0d6efd';
playerNameElement.style.fontWeight = 'bold';
playerNameElement.style.fontFamily = ''


function initializeGame() {

  
  
  wordIndex = Math.floor(Math.random() * foodEnglish.length);
  word = foodEnglish[wordIndex].toUpperCase();
  guessedLetters = [];

  
  let wordDisplay = word[0];
  for (let i = 1; i < word.length; i++) {
    if (word[i] === ' ') {
      wordDisplay += '  ';
    } else {
      wordDisplay += '_ ';
    }
  }

  document.getElementById('word').textContent = wordDisplay;

  
  document.getElementById('hintContainer').innerHTML = '';
  document.getElementById('winMessage').textContent = '';
  document.getElementById('options').innerHTML = '';
  document.getElementById('hebrewFinal').innerHTML = '';
  document.getElementById('hebrewTranslation').innerHTML = '';

  
  // document.removeEventListener('keydown', handleKeyPress);

  
  document.addEventListener('keydown', handleKeyPress);
}

let lists = foodEnglish + foodsHebrew

function handleKeyPress(event) {
  let letter = event.key.toUpperCase();
  
  if ( /^[a-zA-Z]+$/.test(letter)) {
    checkLetter(letter);
  }

  // ! Exclude other keys. Only listen on key letters 
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
      wordDisplay += '_ ';
    }
  }
  document.getElementById('word').textContent = wordDisplay;

  if (!found) {
    alert('Incorrect guess: ' + letter);
  }


  // ! What does the last index (-1) have to do with guessing correctly.
  // ? Answer: if wordDisplay doesn't include ('_')

  
  if (wordDisplay.indexOf('_') === -1) {
    let winMessage = document.createElement('h1');
    let hebrewMessage = document.createElement('h5')
    winMessage.textContent = `Correct!`;
    hebrewMessage.textContent = `Choose the correct Hebrew translation`
    hebrewMessage.style.color = '#0d6efd'

    document.getElementById('winMessage').appendChild(winMessage);

    setTimeout(showOptions, 1000);
    setInterval(document.getElementById('hebrewTranslation').appendChild(hebrewMessage), 5000)
    
    winMessage.style.color = 'green'
    winMessage.style.fontSize = '2em'
  }
}

function showHint() {

  // Make more readable 
  let hint = '';
  if (wordIndex >= 0 && wordIndex < 10) {
    hint = 'It\'s a type of dish.';
  } else if (wordIndex >= 10 && wordIndex < 20) {
    hint = 'It\'s a type of fruit.';
  } else if (wordIndex >= 20 && wordIndex < 30) {
    hint = 'It\'s a type of vegetable.';
  }

  
  const hintContainer = document.getElementById('hintContainer');
 
  
  const hintParagraph = document.createElement('p');
  hintParagraph.textContent = hint;
  
  hintContainer.appendChild(hintParagraph);

  
  setTimeout(() => {
    hintContainer.removeChild(hintParagraph);
  }, 5000);
}



  function showOptions() {
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  
  let correctOption = foodsHebrew[wordIndex];

  let options = [correctOption];

  // ! review - why the options.push(randomOption)
  while (options.length < 3) {
    let randomIndex = Math.floor(Math.random() * foodsHebrew.length);
    let randomOption = foodsHebrew[randomIndex];

    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }

  
  options = options.sort(() => Math.random() - 0.5);

  // This creates buttons for the hebrew options 

  options.forEach(option => {
    let button = document.createElement('button');
    button.textContent = option;
    button.className = 'option btn btn-primary p-3 m-2';
    button.onclick = () => checkOption(option);
    optionsContainer.appendChild(button);

    
  });
}


// Create a div with DOM and render the win messages inside the DOM


  function checkOption(selectedOption) {
    if (selectedOption === foodsHebrew[wordIndex]) {
   
      let finalWinMessage = document.createElement('h1')
      finalWinMessage.textContent = 'Translation Correct!'
      finalWinMessage.style.color = 'green'

      let hebrewFinal = document.getElementById('hebrewFinal')
      hebrewFinal.innerHTML = '';
      hebrewFinal.appendChild(finalWinMessage)
      
      setTimeout(initializeGame, 3000)
      // setInterval(hebrewFinal.removeChild(finalWinMessage), 3000)


    } else {
    

      const looseMessage = document.createElement('h1')
      looseMessage.textContent = 'Incorrect. Try again.'
      winDiv.appendChild(looseMessage)

      showOptions();
    }
    
  }


initializeGame();