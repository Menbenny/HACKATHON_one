// Are you ready prompt (Bootstrap -- MODAL)
// if ready, start the game 

document.getElementById('submitButton').addEventListener('click', function() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        localStorage.setItem('userName', playerName);
        window.location.href = '/Game/gameindex.html';
    }
});
