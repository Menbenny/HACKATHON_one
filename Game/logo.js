// LOGO ANIMATION
document.addEventListener('DOMContentLoaded', function() {
    const logoText = "  T  A  G  "; //
    const logoElement = document.getElementById('logo');
    let isTyping = true;

    logoElement.style.fontSize = '2em'
    logoElement.style.fontWeight = 'Bold'

    
    logoElement.textContent = '';

    // Convert spaces to underscores
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
