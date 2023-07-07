let scorePlayer = document.getElementById('score-player');
let scoreComputer = document.getElementById('score-computer');

function playGame(playerInput) {
	clearMessages();

	let randomNumber = Math.floor(Math.random() * 8 + 1);
	let playerMove = getMoveName(playerInput);
	let computerMove = getMoveName(randomNumber);

	function getMoveName(moveId) {
		if (moveId == 1) {
			return 'kamień';
		} else if (moveId == 2) {
			return 'papier';

			// Improve our winning rate by 75% when we select rock.
		} else if (moveId >= 3 && moveId <= 8) {
			return 'nożyce';
		}
	}

	printMessage('Ruch komputera: ' + computerMove);

	printMessage('Twój ruch to: ' + playerMove);

	function displayResult(argComputerMove, argPlayerMove) {
		if (argComputerMove === argPlayerMove) {
			printMessage('Remis!');
		} else if (
			(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
			(argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
			(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
		) {
			printMessage('Ty wygrywasz!');
			scorePlayer.textContent++;
		} else {
			printMessage('Komputer wygrywa!');
			scoreComputer.textContent++;
		}
	}
	displayResult(computerMove, playerMove);
}

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
	deletePoints();
	clearMessages();
});

document.getElementById('fast-game-btn').addEventListener('click', function () {
	fastGame();
	clearMessages();
});
