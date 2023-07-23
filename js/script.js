{
  const scorePlayer = document.getElementById('score-player');
  const scoreComputer = document.getElementById('score-computer');
  const playGame = function (playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 8 + 1);

    const getMoveName = function (moveId) {
      if (moveId == 1) {
        return 'kamień';
      } else if (moveId == 2) {
        return 'papier';

        // Improve our winning rate by 75% when we select rock.
      } else if (moveId >= 3 && moveId <= 8) {
        return 'nożyce';
      }
    };
    const playerMove = getMoveName(playerInput);
    const computerMove = getMoveName(randomNumber);

    printMessage('Ruch komputera: ' + computerMove);

    printMessage('Twój ruch to: ' + playerMove);

    const displayResult = function (argComputerMove, argPlayerMove) {
      if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
        stopConfetti();
      } else if (
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
      ) {
        printMessage('Ty wygrywasz!');
        scorePlayer.textContent++;
        startConfetti();
      } else {
        printMessage('Komputer wygrywa!');
        removeConfetti();
        scoreComputer.textContent++;
      }
    };
    displayResult(computerMove, playerMove);
  };

  const fastGame = function () {
    for (let i = 0; i <= 1000; i++) {
      playGame(1);
    }
  };

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
  });

  document.getElementById('results-btn').addEventListener('click', function () {
    deletePoints(scorePlayer, scoreComputer);
    clearMessages();
    removeConfetti();
  });

  document.getElementById('fast-game-btn').addEventListener('click', function () {
    fastGame();
    clearMessages();
    removeConfetti();
  });
}
