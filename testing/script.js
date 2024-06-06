// Array de comidas con sus traducciones en hebreo
const foods = [
    { english: 'apple', hebrew: 'תפוח' },
    { english: 'banana', hebrew: 'בננה' },
    { english: 'carrot', hebrew: 'גזר' },
    { english: 'bread', hebrew: 'לחם' },
    { english: 'cheese', hebrew: 'גבינה' },
    { english: 'orange', hebrew: 'תפוז' }
];

console.log(foods.english);
// let currentFood;
// // Referencias a los elementos HTML
// const hebrewWord = document.getElementById('hebrewWord');
// const guessInput = document.getElementById('guessInput');
// const guessButton = document.getElementById('guessButton');
// const message = document.getElementById('message');
// // Función para seleccionar una nueva palabra
// function selectNewWord() {
//     currentFood = foods[Math.floor(Math.random() * foods.length)];
//     hebrewWord.textContent = currentFood.hebrew;
// }
// // Función para comprobar la suposición del usuario
// function checkGuess() {
//     const userGuess = guessInput.value.trim().toLowerCase();
//     if (userGuess === currentFood.english.toLowerCase()) {
//         message.textContent = 'Correct!';
//         selectNewWord();
//         guessInput.value = '';
//     } else {
//         message.textContent = 'Try again!';
//     }
// }
// // Añadir event listener al botón de adivinar
// guessButton.addEventListener('click', checkGuess);
// // Inicializar el juego seleccionando la primera palabra
// selectNewWord();