// LOGO ANIMATION
document.addEventListener('DOMContentLoaded', function() {
    const logoText = "  T  A  G  "; 
    const logoElement = document.getElementById('logo');
    let isTyping = true;

    logoElement.style.fontSize = '3em'
    logoElement.style.fontWeight = 'Bold'

    
    logoElement.textContent = '';

    
    const logoTextWithUnderscores = logoText.replace(/ /g, '_');

    // Typing animation function
    function typeText(index) {
        if (isTyping) {
            if (index < logoTextWithUnderscores.length) {
                const char = logoTextWithUnderscores.charAt(index);
                logoElement.textContent += char === '_' ? '_' : char;
                setTimeout(function() {
                    typeText(index + 1);
                }, 200); // Adjust typing speed here (in milliseconds)
            } else {
                isTyping = false;
                setTimeout(function() {
                    typeText(index - 1);
                }, 1000); // Delay before erasing (in milliseconds)
            }
        } else {
            if (index >= 0) {
                const char = logoTextWithUnderscores.charAt(index);
                logoElement.textContent = logoElement.textContent.slice(0, -1);
                setTimeout(function() {
                    typeText(index - 1);
                }, 100); // Adjust erasing speed here (in milliseconds)
            } else {
                isTyping = true;
                setTimeout(function() {
                    typeText(0);
                }, 1000); // Delay before typing again (in milliseconds)
            }
        }
    }

    // Start typing animation
    typeText(0);
});

// Falling letter animation 


document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.falling-letters');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzקראטוןםפשדגכעיחלךףזסבהנמצתץ";

    function createLetter() {
        const letter = document.createElement('span');
        letter.classList.add('letter');
        letter.style.left = Math.random() * 100 + 'vw';
        letter.style.animationDuration = Math.random() * 3 + 2 + 's';
        letter.textContent = letters[Math.floor(Math.random() * letters.length)];
        

        setTimeout(() => {
            letter.remove();
        }, 5000);
    }

    setInterval(createLetter, 100);
});
