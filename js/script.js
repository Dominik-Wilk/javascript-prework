function playGame(playerInput) {
	clearMessages();

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let playerMove = getMoveName(playerInput);
	let computerMove = getMoveName(randomNumber);

	function getMoveName(moveId) {
		if (moveId == 1) {
			return 'kamień';
		} else if (moveId == 2) {
			return 'papier';
		} else if (moveId == 3) {
			return 'nożyce';
		}
		printMessage('Nie znam ruchu o id ' + moveId + '.');
		return 'nieznany ruch';
	}

	console.log('Wylosowana liczba to: ' + randomNumber);

	printMessage('Ruch komputera: ' + computerMove);

	console.log('Gracz wpisał: ' + playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	function displayResult(argComputerMove = computerMove, argPlayerMove = playerMove) {
		console.log('moves:', argComputerMove + ', ' + argPlayerMove);
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
			printMessage('Komputer wygrywa!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			printMessage('Komputer wygrywa!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			printMessage('Komputer wygrywa!');
		} else if (argPlayerMove == 'nieznany ruch') {
			printMessage('Komputer wygrywa!');
		} else {
			printMessage('Remis!');
		}
	}
	displayResult();
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
