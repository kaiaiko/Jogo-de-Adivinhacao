let secretNumber;
let attempts = 0;

function generateSecretNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Por favor, insira um número válido de 1 á 100.');
    return;
  }
  
  attempts++;

  if (guess === secretNumber) {
    displayFeedback(`Parabéns ! Você conseguiu acertar o número em ${attempts} tentativas.`);
    attempts = 0;
    generateSecretNumber();
  }else {
    const difference = Math.abs(secretNumber - guess);
    let feedbackText = '';

    if (difference <= 10) {
      feedbackText = 'Quente!';
      displayFeedback(feedbackText, false, 'warm');
    } else {
      feedbackText = 'Frio!';
      displayFeedback(feedbackText, false, 'cold');
    }
  }

  displayAttempts();
}

function displayFeedback(message) {
  document.getElementById('feedback').innerText = message;
}

function displayFeedback(message, isWin, className) { /* Função para deixar o frio "cold" em azul e quente "warm" em vermelho */
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = message;
  feedbackElement.classList.remove('warm', 'cold');
  
  if (className) {
    feedbackElement.classList.add(className);
  }

  if (!isWin) {
    feedbackElement.style.animation = 'fadeIn 0.5s';
    setTimeout(() => {
      feedbackElement.style.animation = '';
    }, 500);
  }
}

function displayAttempts() {
  document.getElementById('attempts').innerText = `Tentativas: ${attempts}`;
}

generateSecretNumber();