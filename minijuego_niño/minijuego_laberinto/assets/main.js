let lives = 3;
let score = 0;
let timer = 60; // Tiempo inicial
let gameInterval;
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('scoreDisplay');
const powerDisplay = document.getElementById('powerDisplay');
const timerDisplay = document.getElementById('timer');
let powers = []; // Array para almacenar habilidades permanentes
let obstacleSpeed = 2000; // Velocidad inicial de la comida rápida
let fruitSpeed = 1000; // Velocidad inicial de las frutas

// Inicializar el juego
function initGame() {
    createFood();
    createObstacles();
    updateLives();
    startTimer();
    moveObstacles();
    moveFruits();
}

// Crear frutas en posiciones aleatorias
function createFood() {
    const fruits = ['🍏', '🍌', '🍓', '🍊', '🍍']; // Manzanas y otras frutas
    for (let i = 0; i < 5; i++) {
        const food = document.createElement('div');
        food.classList.add('food-item');
        food.innerText = fruits[Math.floor(Math.random() * fruits.length)];
        food.style.top = Math.random() * (gameArea.clientHeight - 70) + 'px'; 
        food.style.left = Math.random() * (gameArea.clientWidth - 70) + 'px'; 
        food.onclick = collectFood; // Añadir evento de clic
        gameArea.appendChild(food);
    }
}

// Crear comidas rápidas en posiciones aleatorias
function createObstacles() {
    const fastFoodItems = ['🍔', '🍟', '🍕', '🌭']; // Comidas rápidas
    for (let i = 0; i < 3; i++) {
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        obstacle.innerText = fastFoodItems[Math.floor(Math.random() * fastFoodItems.length)];
        obstacle.style.top = Math.random() * (gameArea.clientHeight - 50) + 'px';
        obstacle.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';
        obstacle.onclick = hitObstacle; // Añadir evento de clic
        gameArea.appendChild(obstacle);
    }
}

// Crear bonificaciones en posiciones aleatorias
function createBonusItems() {
    const bonusItems = ['⭐', '⚡', '💰']; // Estrella, rayo y moneda
    const bonusItem = document.createElement('div');
    bonusItem.classList.add('bonus-item');
    bonusItem.innerText = bonusItems[Math.floor(Math.random() * bonusItems.length)];
    bonusItem.style.top = Math.random() * (gameArea.clientHeight - 40) + 'px';
    bonusItem.style.left = Math.random() * (gameArea.clientWidth - 40) + 'px';
    bonusItem.onclick = collectBonus; // Añadir evento de clic
    gameArea.appendChild(bonusItem);
}

// Recolectar fruta
function collectFood(event) {
    score += 10; // Ganar puntos
    scoreDisplay.innerText = score; // Actualizar puntuación
    event.target.remove(); // Eliminar fruta recogida
    createFood(); // Crear nueva fruta
    createBonusItems(); // Generar bonificación aleatoria
    if (score >= 50) { // Cambia este valor según el número de frutas
        victory();
    }
    if (score % 50 === 0) { // Aumentar dificultad cada 50 puntos
        increaseDifficulty();
    }
}

// Chocar con un obstáculo
function hitObstacle(event) {
    lives--;
    score -= 5; // Perder puntos
    scoreDisplay.innerText = score; // Actualizar puntuación
    updateLives();
    event.target.remove(); // Eliminar comida rápida chocada
    if (lives <= 0) {
        gameOver();
    }
}

// Recolectar bonificación
function collectBonus(event) {
    const bonusType = event.target.innerText;
    switch (bonusType) {
        case '⭐':
            score += 20; // Ganar puntos extra
            break;
        case '⚡':
            powers.push('Velocidad Aumentada'); // Habilidad temporal
            setTimeout(() => {
                powers = powers.filter(power => power !== 'Velocidad Aumentada');
                updatePowerDisplay();
            }, 10000); // Poder activo por 10 segundos
            break;
        case '💰':
            score += 50; // Ganar muchos puntos
            break;
    }
    scoreDisplay.innerText = score; // Actualizar puntuación
    event.target.remove(); // Eliminar bonificación recogida
}

// Actualizar visualización de habilidades
function updatePowerDisplay() {
    if (powers.length > 0) {
        powerDisplay.innerText = `Habilidades: ${powers.join(', ')}`;
    } else {
        powerDisplay.innerText = 'Habilidades: Ninguna';
    }
}

// Mover obstáculos aleatoriamente
function moveObstacles() {
    const obstacles = document.querySelectorAll('.obstacle');
    obstacles.forEach(obstacle => {
        setInterval(() => {
            const newTop = Math.random() * (gameArea.clientHeight - 50) + 'px';
            const newLeft = Math.random() * (gameArea.clientWidth - 50) + 'px';
            obstacle.style.top = newTop;
            obstacle.style.left = newLeft;
        }, obstacleSpeed); // Cambia de posición según la velocidad de la comida rápida
    });
}

// Mover frutas aleatoriamente
function moveFruits() {
    const fruits = document.querySelectorAll('.food-item');
    fruits.forEach(fruit => {
        setInterval(() => {
            const newTop = Math.random() * (gameArea.clientHeight - 70) + 'px'; 
            const newLeft = Math.random() * (gameArea.clientWidth - 70) + 'px'; 
            fruit.style.top = newTop;
            fruit.style.left = newLeft;
        }, fruitSpeed); // Cambia de posición según la velocidad de las frutas
    });
}

// Aumentar dificultad
function increaseDifficulty() {
    obstacleSpeed = Math.max(1000, obstacleSpeed - 200); // Aumentar velocidad de la comida rápida
    fruitSpeed = Math.max(800, fruitSpeed - 100); // Aumentar velocidad de las frutas
}

// Actualizar las vidas
function updateLives() {
    for (let i = 1; i <= 3; i++) {
        const heart = document.getElementById(`heart${i}`);
        heart.style.color = i > lives ? '#ccc' : '#ff0000';
    }
}

// Fin del juego
function gameOver() {
    clearInterval(gameInterval); // Detener el temporizador
    let gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
    gameOverModal.show();
}

// Ganar el juego
function victory() {
    clearInterval(gameInterval); // Detener el temporizador
    let victoryModal = new bootstrap.Modal(document.getElementById('victoryModal'));
    victoryModal.show();
}

// Iniciar temporizador
function startTimer() {
    gameInterval = setInterval(() => {
        timer--;
        timerDisplay.innerText = timer;
        if (timer <= 0) {
            gameOver();
        }
    }, 1000); // Actualizar cada segundo
}

// Reiniciar el juego
function restartGame() {
    lives = 3;
    score = 0;
    timer = 60; // Reiniciar temporizador
    scoreDisplay.innerText = score; // Reiniciar puntuación
    powerDisplay.innerText = 'Habilidades: Ninguna'; // Reiniciar habilidades
    timerDisplay.innerText = timer; // Reiniciar temporizador
    gameArea.innerHTML = '';
    powers = []; // Reiniciar habilidades
    obstacleSpeed = 2000; // Reiniciar velocidad de la comida rápida
    fruitSpeed = 1000; // Reiniciar velocidad de las frutas
    initGame();
}

// Iniciar el juego al cargar
window.onload = initGame;
