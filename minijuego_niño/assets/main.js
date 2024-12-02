let lives = 3;
  let correctItems = 0;

  // Permitir arrastrar sobre las zonas
  function allowDrop(event) {
    event.preventDefault();
  }

  // Al arrastrar
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  // Al soltar
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var element = document.getElementById(data);
    if (validateDrop(event.target.id, data)) {
      correctItems++;
      event.target.appendChild(element);  // Mueve el elemento dentro de la zona correcta
      checkWin();
      showEncouragement("¡Excelente! Eso fue un acierto, ¡sigue así!", data); // Mostrar mensaje con beneficios
    } else {
      lives--;
      updateLives();
      if (lives <= 0) {
        gameOver();
      } else {
        showEncouragement("¡Intenta de nuevo! Estás mejorando cada vez.");
      }
    }
  }

  // Validar si el elemento pertenece a la zona
  function validateDrop(zoneId, foodId) {
    const correctMapping = {
      vitaminA: ['carrot'],
      vitaminC: ['orange'],
      vitaminD: ['avocado']
    };
    return correctMapping[zoneId]?.includes(foodId);
  }

  // Comprobar si el jugador ha ganado
  function checkWin() {
    if (correctItems === 3) {
      let victoryModal = new bootstrap.Modal(document.getElementById('victoryModal'));
      victoryModal.show();
    }
  }

  // Actualizar las vidas
  function updateLives() {
    for (let i = 1; i <= 3; i++) {
      const heart = document.getElementById(`heart${i}`);
      heart.style.color = i > lives ? '#ccc' : '#ff0000';
    }
  }

  // Juego terminado
  function gameOver() {
    let gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
    gameOverModal.show();
  }

  // Mostrar retroalimentación positiva con beneficios
  function showEncouragement(message, foodId = null) {
    let benefitMessage = '';
    switch(foodId) {
      case 'carrot':
        benefitMessage = 'La zanahoria es rica en vitamina A, que es excelente para la salud ocular, la piel y el sistema inmunológico.';
        break;
      case 'orange':
        benefitMessage = 'La naranja es una fuente rica en vitamina C, que ayuda a fortalecer el sistema inmunológico, mejora la piel y favorece la absorción de hierro.';
        break;
      case 'avocado':
        benefitMessage = 'El aguacate es rico en vitamina D, que es crucial para la salud ósea, la absorción de calcio y el fortalecimiento del sistema inmunológico.';
        break;
      default:
        benefitMessage = '¡Continúa así! ¡Estás mejorando mucho!';
    }

    document.getElementById('encouragementMessage').innerHTML = `<strong>${message}</strong><br><br>${benefitMessage}`;
    let encouragementModal = new bootstrap.Modal(document.getElementById('encouragementModal'));
    encouragementModal.show();
  }

  // Reiniciar el juego
  function restartGame() {
    location.reload();
  }