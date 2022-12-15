const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Maradék lépések: ${10-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText,computerChoice)
				
				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Döntetlen'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Számítógép nyert';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Játékos nyert'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Számítógép nyert';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Játékos nyert';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Számítógép nyert';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Játékos nyert';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Játék vége'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Te nyertél'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Vesztettél';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Döntetlen';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'újrakezdés';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}


	playGame();
	
}

game();
