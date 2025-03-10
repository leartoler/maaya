const words = {
    "k uhul ajaw": "Dentro de los mayas, la autoriadad se depositaba en bajo el título de ajaw. Pero fue hasta finales del siglo IV, los supremos gobernantes se destinguían de la clase señorial haciéndose llamar K'uhul ajaw, o Señor Divino ",

};

let selectedWord = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];
let guessedLetters = [];
let attempts = 6;

const wordDisplay = document.getElementById("word-display");
const lettersDiv = document.getElementById("letters");
const message = document.getElementById("message");
const attemptsSpan = document.getElementById("attempts");
const modal = document.getElementById("word-info-modal");
const wordTitle = document.getElementById("word-title");
const wordMeaning = document.getElementById("word-meaning");
const closeModal = document.querySelector(".close");

// Display underscores for the word
function updateWordDisplay() {
    wordDisplay.textContent = selectedWord.split("").map(letter =>
        guessedLetters.includes(letter) ? letter : "_").join(" ");
}

// Create letter buttons
function createLetterButtons() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet.split("").forEach(letter => {
        const btn = document.createElement("button");
        btn.textContent = letter;
        btn.onclick = () => handleGuess(letter, btn);
        lettersDiv.appendChild(btn);
    });
}

// Handle letter guess
function handleGuess(letter, btn) {
    btn.disabled = true;
    if (selectedWord.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        attempts--;
        attemptsSpan.textContent = attempts;
    }
    checkGameStatus();
    updateWordDisplay();
}

// Check if player won or lost
function checkGameStatus() {
    if (selectedWord.split("").every(letter => guessedLetters.includes(letter))) {
        message.textContent = "Ganaste";
        showWordInfo();
        lettersDiv.innerHTML = "";
    } else if (attempts === 0) {
        message.textContent = `Perdiste. La palabre era "${selectedWord}"`;
        showWordInfo();
        lettersDiv.innerHTML = "";
    }
}

// Show word information in modal
function showWordInfo() {
    wordTitle.textContent = `Palabra: ${selectedWord}`;
    wordMeaning.textContent = words[selectedWord];
    modal.style.display = "flex";
}

// Restart the game
function restartGame() {
    modal.style.display = "none";
    selectedWord = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];
    guessedLetters = [];
    attempts = 6;
    message.textContent = "";
    attemptsSpan.textContent = attempts;
    lettersDiv.innerHTML = "";
    updateWordDisplay();
    createLetterButtons();
}

// Close modal when clicking 'X'
closeModal.onclick = () => {
    modal.style.display = "none";
};

// Initialize game
updateWordDisplay();
createLetterButtons();