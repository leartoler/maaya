const pairs = [
    { image: 'https://luummaaya.neocities.org/Images/juego02_1.jpg', text: 'Palenque' },
    { image: 'https://luummaaya.neocities.org/Images/juego02_2.jpg', text: 'Ek Balam' },
    { image: 'https://luummaaya.neocities.org/Images/juego02_3.jpg', text: 'El Tigre' },
    { image: 'https://luummaaya.neocities.org/Images/juego02_4.jpg', text: 'Edzna' },
    { image: 'https://luummaaya.neocities.org/Images/juego02_5.jpg', text: 'Xcalumkin' },
    { image: 'https://luummaaya.neocities.org/Images/juego02_6.jpg', text: 'Tulum' },
    { image: 'https://luummaaya.neocities.org/Images/juego02_7.jpg', text: 'Chichen Itza' },
    { image: 'https://luummaaya.neocities.org/Images/juego02_8.jpg', text: 'Calakmul' }
];

let cards = pairs.flatMap(pair => [
    { type: 'image', content: pair.image, pairId: pair.text },
    { type: 'text', content: pair.text, pairId: pair.text }
]);
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
    cards.forEach(cardData => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.pairId = cardData.pairId;

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        const front = document.createElement("div");
        front.classList.add("card-front");
        front.textContent = "?";

        const back = document.createElement("div");
        back.classList.add("card-back");

        if (cardData.type === 'image') {
            back.innerHTML = `<img src="${cardData.content}" alt="Image">`;
        } else {
            back.textContent = cardData.content;
        }

        cardInner.appendChild(front);
        cardInner.appendChild(back);
        card.appendChild(cardInner);

        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        flippedCards.push(this);
    }
    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (flippedCards[0].dataset.pairId === flippedCards[1].dataset.pairId) {
        flippedCards = [];
        matchedPairs++;
        score += 10;
        updateScore();
        if (matchedPairs === pairs.length) {
            setTimeout(() => {
                triggerFireworks();
                alert("You win!");
            }, 300);
        }
    } else {
        setTimeout(() => {
            flippedCards.forEach(card => card.classList.remove("flipped"));
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