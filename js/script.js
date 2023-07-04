let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerMove = 'nieznany ruch';
let computerMove = 'nieznany ruch';
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Wylosowana liczba to: ' + randomNumber);

if (randomNumber == 1) {
	computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else {
	computerMove = 'nożyce';
}
printMessage('Ruch komputera: ' + computerMove);

console.log('Gracz wpisał: ' + playerInput);

if (playerInput == '1') {
	playerMove = 'kamień';
} else if (playerInput == '2') {
	playerMove = 'papier';
} else if (playerInput == '3') {
	playerMove = 'nożyce';
} else {
	playerMove = 'error';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
	printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
	printMessage('Komputer wygrywa!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
	printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
	printMessage('Komputer wygrywa!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
	printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
	printMessage('Komputer wygrywa!');
} else if (playerMove == 'error') {
	printMessage('Komputer wygrywa!');
} else {
	printMessage('Remis!');
}
