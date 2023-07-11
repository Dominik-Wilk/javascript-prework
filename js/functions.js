function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

// function deletePoints() {
// 	scorePlayer.innerHTML = '0';
// 	scoreComputer.innerHTML = '0';
// }

function fastGame() {
	for (let i = 0; i <= 1000; i++) {
		playGame(1);
	}
}
