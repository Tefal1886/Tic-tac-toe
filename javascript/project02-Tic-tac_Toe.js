
let i = 0;
let playerScore = 0;
let computerScore = 0;

let gameGrid1 = document.querySelector('.js-game-item1');
let gameGrid2 = document.querySelector('.js-game-item2');
let gameGrid3 = document.querySelector('.js-game-item3');
let gameGrid4 = document.querySelector('.js-game-item4');
let gameGrid5 = document.querySelector('.js-game-item5');
let gameGrid6 = document.querySelector('.js-game-item6');
let gameGrid7 = document.querySelector('.js-game-item7');
let gameGrid8 = document.querySelector('.js-game-item8');
let gameGrid9 = document.querySelector('.js-game-item9');

const multiply = `<img src="images/multiply.png" width="100px">`;
const circle = `<img src="images/scribble-circle-10.png" width="100px">`;
let isAllowed = true;

let gameGrids = [gameGrid1, gameGrid2, gameGrid3, gameGrid4, gameGrid5, gameGrid6, gameGrid7, gameGrid8, gameGrid9];

for (let x = 0; x < 9; x++) { 
    gameGrids[x].addEventListener('click', () => {
        if (document.querySelector('.js-result').innerHTML != '') {
            alert('Play new game.')
            return;
        }

        if (!gameGrids[x].innerHTML) {
            if (i % 2 === 0) {
                i++;
                gameGrids[x].innerHTML = multiply;
            } else if (i % 2 === 1) {
                i++;
                gameGrids[x].innerHTML = circle;
            };
        };

        // gameGrids[x].innerHTML = multiply;

        for (let j = 0; j < 7; j = j + 3) {
            if (gameGrids[j].innerHTML === multiply && gameGrids[j + 1].innerHTML === multiply && gameGrids[j + 2].innerHTML === multiply) {
                document.querySelector('.js-result').innerHTML = 'You win!';
                playerScore++;
                document.querySelector('.js-your-score').innerHTML = `You : ${playerScore}`;
                return;
            };
            if (gameGrids[j].innerHTML === circle && gameGrids[j + 1].innerHTML === circle && gameGrids[j + 2].innerHTML === circle) {
                document.querySelector('.js-result').innerHTML = 'Game Over!';
                computerScore++;
                document.querySelector('.js-computer-score').innerHTML = `Computer : ${computerScore}`;
            };
        };
        for (let j = 0; j < 3; j++) {
            if (gameGrids[j].innerHTML === multiply && gameGrids[j + 3].innerHTML === multiply && gameGrids[j + 6].innerHTML === multiply) {
                document.querySelector('.js-result').innerHTML = 'You win!';
                playerScore++;
                document.querySelector('.js-your-score').innerHTML = `You : ${playerScore}`;
            };
            if (gameGrids[j].innerHTML === circle && gameGrids[j + 3].innerHTML === circle && gameGrids[j + 6].innerHTML === circle) {
                document.querySelector('.js-result').innerHTML = 'Game Over!';
                computerScore++;
                document.querySelector('.js-computer-score').innerHTML = `Computer : ${computerScore}`;
            };
        };
        if (gameGrids[0].innerHTML === multiply && gameGrids[4].innerHTML === multiply && gameGrids[8].innerHTML === multiply) {
            document.querySelector('.js-result').innerHTML = 'You win!';
            playerScore++;
            document.querySelector('.js-your-score').innerHTML = `You : ${playerScore}`;
        };
        if (gameGrids[0].innerHTML === circle && gameGrids[4].innerHTML === circle && gameGrids[8].innerHTML === circle) {
            document.querySelector('.js-result').innerHTML = 'Game Over!';
            computerScore++;
            document.querySelector('.js-computer-score').innerHTML = `Computer : ${computerScore}`;
        };
        if (gameGrids[2].innerHTML === multiply && gameGrids[4].innerHTML === multiply && gameGrids[6].innerHTML === multiply) {
            document.querySelector('.js-result').innerHTML = 'You win!';
            playerScore++;
            document.querySelector('.js-your-score').innerHTML = `You : ${playerScore}`;
        };
        if (gameGrids[2].innerHTML === circle && gameGrids[4].innerHTML === circle && gameGrids[6].innerHTML === circle) {
            document.querySelector('.js-result').innerHTML = 'Game Over!';
            computerScore++;
            document.querySelector('.js-computer-score').innerHTML = `Computer : ${computerScore}`;
        };
        // let randomComputerNum = Math.random();
        // setTimeout(() => {
        //     gameGrids.forEach((value, index) => {
        //         if (randomComputerNum <= (index + 1) / 9 && randomComputerNum > (index + 0) / 9 && value.innerHTML === '') {
        //             value.innerHTML = circle;
        //         }
        //     }); 
        // }, 1000);
        let gameGridsInner = gameGrids.map(value => {
            return value.innerHTML;
        });
        if (!gameGridsInner.includes('') && document.querySelector('.js-result').innerHTML === '') {
            document.querySelector('.js-result').innerHTML = 'Tie';
        }
    });
};

const resetScoreButton = document.querySelector('.js-reset-score');
resetScoreButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.js-your-score').innerHTML = `You : 0`;
    document.querySelector('.js-computer-score').innerHTML = `Computer : 0`;
    document.querySelector('.js-result').innerHTML = '';
    gameGrids.forEach((value) => {
        value.innerHTML = '';
    });
});

const playAgainButton = document.querySelector('.js-play-again');
playAgainButton.addEventListener('click', () => {
    gameGrids.forEach((value) => {
        value.innerHTML = '';
    });
    document.querySelector('.js-result').innerHTML = '';
});

