const symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🥭', '🍍', '🥝'];
let cards = [...symbols, ...symbols];
let flippedCards = [];
let matchedPairs = 0;
let score = 0;

function updateScore() {
    document.getElementById("score").textContent = score;
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    const board = document.getElementById("gameBoard");
    board.innerHTML = '';
    cards = shuffle(cards);
    cards.forEach(symbol => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        this.textContent = this.dataset.symbol;
        flippedCards.push(this);
    }
    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
        flippedCards = [];
        matchedPairs++;
        score += 10;
        updateScore();
        if (matchedPairs === symbols.length) {
            setTimeout(() => {
                triggerFireworks();
                alert("You win!");
            }, 300);
        }
    } else {
        setTimeout(() => {
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.textContent = "";
            });
            flippedCards = [];
            score -= 5;
            updateScore();
        }, 500);
    }
}

function triggerFireworks() {
    for (let i = 0; i < 20; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        document.body.appendChild(firework);
        firework.style.left = `${Math.random() * window.innerWidth}px`;
        firework.style.top = `${Math.random() * window.innerHeight}px`;
        setTimeout(() => firework.remove(), 1000);
    }
}

createBoard();