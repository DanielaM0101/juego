var livesElement = document.getElementById('lives');
var scoreElement = document.getElementById('score');

livesElement.style.color = 'red'; 
scoreElement.style.color = 'blue';



function playRound() {

    const playerCardValue = Math.floor(Math.random() * 13) + 1;
    const computerCardValue = Math.floor(Math.random() * 13) + 1;
  
   
    document.getElementById('player-card').innerText = playerCardValue;
    document.getElementById('computer-card').innerText = computerCardValue;
  
    if (playerCardValue > computerCardValue) {
      document.getElementById('result-text').innerText = '¡Ganaste esta ronda!';
      document.getElementById('score').innerText = parseInt(document.getElementById('score').innerText) + 1;
    } else if (playerCardValue < computerCardValue) {
      document.getElementById('result-text').innerText = '¡Perdiste esta ronda!';
      document.getElementById('lives').innerText = parseInt(document.getElementById('lives').innerText) - 1;
    } else {
      document.getElementById('result-text').innerText = 'Empate';
    }
  
   
    if (parseInt(document.getElementById('lives').innerText) === 0) {
      endGame();
    }
  }
  
  function endGame() {
    document.getElementById('result-text').innerText = '¡Game Over!';

    
    document.querySelector('.cards button').setAttribute('disabled', 'disabled');
  
    
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Reiniciar Juego';
    restartButton.onclick = function() {
      
      location.reload();
    };
    document.querySelector('.game-container').appendChild(restartButton);

  }
  
  
  