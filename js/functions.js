const printMessage = function (msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
};

const clearMessages = function () {
	document.getElementById('messages').innerHTML = '';
};

const deletePoints = function (scorePlayer, scoreComputer) {
	scorePlayer.innerHTML = '0';
	scoreComputer.innerHTML = '0';
};

// function fastGame() {
// 	for (let i = 0; i <= 1000; i++) {
// 		playGame(1);
// 	}
// }
