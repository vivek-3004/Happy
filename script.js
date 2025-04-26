// Hide the loading screen after the page loads
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});

// Existing word floating code
const words = [
    "You Are Amazing 💖",
    "Believe In Yourself ✨",
    "You Can Do It 💪",
    "Keep Smiling 😊",
    "Stay Positive 🌟",
    "Dream Big 🌈",
    "Shine Bright 🔥",
    "You Matter 💫",
    "Never Give Up 🚀",
    "Happiness Is Yours 💕",
    "You Are Loved 🫶",
    "Be Fearless 🦋",
    "Stay Strong 🛡️",
    "Keep Growing 🌱",
    "You Light Up The World 🌍"
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
