// Hide the loading screen after the page loads
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});

// Existing word floating code
const words = [
    "You Are Amazing 💖",
    "Sandli👸",
    "Believe In Yourself ✨",
    "Miss.Positivity🧙‍♀️",
    "You Can Do It 💪",
    "Sandli🎈",
    "Keep Smiling 😊",
    "Madam🎀",
    "Stay Positive 🌟",
    "Sandli",
    "Dream Big 🌈",
    "Choti Bachi💝",
    "Shine Bright 🔥",
    "Think About Yourself🤍",
    "Sandli Only You Matter 💫",
    "Sandli💕",
    "Never Give Up 🚀",
    "Happiness Is Yours 💕",
    "You Are Loved 🫶",
    "Sandli🎀",
    "Be Fearless 🦋",
    "Stay Strong 🛡️",
    "Sandli You Are Awesome",
    "Keep Growing 🌱",
    "Sandli🦋",
    "You Light Up The World 🌍"
    "Whole World Is Your 😊"
];

const container = document.getElementById('words-container');

function createWord() {
    const word = document.createElement('div');
    word.className = 'word';
    word.textContent = words[Math.floor(Math.random() * words.length)];
    
    word.style.top = Math.random() * window.innerHeight + 'px';
    word.style.left = Math.random() * window.innerWidth + 'px';
    
    const hue = Math.floor(Math.random() * 360);
    word.style.setProperty('--hue', hue);

    container.appendChild(word);

    setTimeout(() => {
        word.remove();
    }, 4000);
}

// Word spawner
setInterval(createWord, 1000);

// ✨ Sparkle effect for mouse
document.addEventListener('mousemove', function(e) {
    for (let i = 0; i < 3; i++) {
        createSparkle(e.clientX, e.clientY);
    }
});

// ✨ Sparkle effect for touch devices
document.addEventListener('touchmove', function(e) {
    const touch = e.touches[0];
    for (let i = 0; i < 3; i++) {
        createSparkle(touch.clientX, touch.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x + (Math.random() * 20 - 10)}px`;
    sparkle.style.top = `${y + (Math.random() * 20 - 10)}px`;
    
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}



function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

setInterval(createHeart, 1000);
