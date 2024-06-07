// Are you ready prompt 
// if ready, start the game 

// startGame = () => {
//     const userName = prompt(`Enter player name: `);
//     if (userName) {
//         localStorage.setItem('userName', userName);
//         window.location.href = '/HACKATHON_one/Game/gameindex.html'
//     }
// }
// startGame()



document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('placeholder').style.display = 'block';
  });
  
  document.getElementById('submitButton').addEventListener('click', function() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        localStorage.setItem('userName', playerName);
        window.location.href = '/HACKATHON_one/Game/gameindex.html';
    }
  });