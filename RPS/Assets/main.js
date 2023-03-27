
// score
var playerScore = 0;
var computerScore = 0;
var playerScoreDiv = document.querySelector('#playerScore');
var computerScoreDiv = document.querySelector('#computerScore');

// rock function
function rock(){
    let playerRock = document.getElementById('rock').innerText; //Rock
    let computer = (Math.ceil(Math.random()*3));
    console.log(computer);

    // 1 - rock
    // 2 - paper
    // 3 - scissors
    
    // displaying image
    let computerChoice = '';
    let computerImage = '';

    if (computer == 1) {
        computerChoice = 'Rock';
        computerImage = 'Assets/Images/rock.png';
    } else if (computer == 2) {
        computerChoice = 'Paper';
        computerImage = 'Assets/Images/paper.png';
    } else if (computer == 3) {
        computerChoice = 'Scissors';
        computerImage = 'Assets/Images/scissors.png';
    }

    let computerDiv = document.getElementById('computer');
    let computerImg = document.createElement('img');
    computerImg.setAttribute('src', computerImage);
    computerImg.setAttribute('alt', computerChoice);
    computerImg.style.width = '95px';
    computerImg.style.height = '95px';

    computerDiv.innerHTML = '';
    computerDiv.appendChild(computerImg);

    // result
    var ResultDiv = document.getElementById("result");
   

    if((playerRock == 'Rock') && (computer == 3)){
        ResultDiv.innerText = "You win!";
        ResultDiv.style.color = 'white';
        // player score
        playerScore++;
        playerScoreDiv.innerText = playerScore;
    } else if ((playerRock == 'Rock') && (computer == 1)){
        ResultDiv.innerText = "Its a Tie!";
        ResultDiv.style.color = 'rgb(171, 235, 226)';
    } else{
        ResultDiv.innerText = "You Lose!";
        ResultDiv.style.color = 'rgb(240, 200, 1)';
        // computer score
        computerScore++;
        computerScoreDiv.innerText = computerScore;
    }
}

// paper function
function paper(){
    let playerPaper = document.getElementById('paper').innerText; //Rock
    let computer = (Math.ceil(Math.random()*3));
    console.log(computer);
    // 1 - rock
    // 2 - paper
    // 3 - scissors

    let computerChoice = '';
    let computerImage = '';

    // displaying image
    if (computer == 1) {
        computerChoice = 'Rock';
        computerImage = 'Assets/Images/rock.png';
    } else if (computer == 2) {
        computerChoice = 'Paper';
        computerImage = 'Assets/Images/paper.png';
    } else if (computer == 3) {
        computerChoice = 'Scissors';
        computerImage = 'Assets/Images/scissors.png';
    }

    let computerDiv = document.getElementById('computer');
    let computerImg = document.createElement('img');
    computerImg.setAttribute('src', computerImage);
    computerImg.setAttribute('alt', computerChoice);
    computerImg.style.width = '95px';
    computerImg.style.height = '95px';

    computerDiv.innerHTML = '';
    computerDiv.appendChild(computerImg);

    var ResultDiv = document.getElementById("result");

    if((playerPaper == 'Paper') && (computer == 3)){
        ResultDiv.innerText = "You Lose!";
        ResultDiv.style.color = 'rgb(240, 200, 1)';
        // computer Score
        computerScore++;
        computerScoreDiv.innerText = computerScore;
    } else if ((playerPaper == 'Paper') && (computer == 1)){
        ResultDiv.innerText = "You Win!";
        ResultDiv.style.color = 'white';
        // player score
        playerScore++;
        playerScoreDiv.innerText = playerScore;
    } else{
        ResultDiv.innerText = "Its a Tie!";
        ResultDiv.style.color = 'rgb(171, 235, 226)';
    }

}

// scissors function
function scissors(){
    let playerScissors = document.getElementById('scissors').innerText; //Rock
    let computer = (Math.ceil(Math.random()*3));
    console.log(computer);
    // 1 - rock
    // 2 - paper
    // 3 - scissors

    let computerChoice = '';
    let computerImage = '';

    // displaying image
    if (computer == 1) {
        computerChoice = 'Rock';
        computerImage = 'Assets/Images/rock.png';
    } else if (computer == 2) {
        computerChoice = 'Paper';
        computerImage = 'Assets/Images/paper.png';
    } else if (computer == 3) {
        computerChoice = 'Scissors';
        computerImage = 'Assets/Images/scissors.png';
    }

    let computerDiv = document.getElementById('computer');
    let computerImg = document.createElement('img');
    computerImg.setAttribute('src', computerImage);
    computerImg.setAttribute('alt', computerChoice);
    computerImg.style.width = '95px';
    computerImg.style.height = '95px';

    computerDiv.innerHTML = '';
    computerDiv.appendChild(computerImg);

    var ResultDiv = document.getElementById("result");

    if((playerScissors == 'Scissors') && (computer == 3)){
        ResultDiv.innerText = "Its a Tie";
        ResultDiv.style.color = 'rgb(171, 235, 226)';
    } else if ((playerScissors == 'Scissors') && (computer == 1)){
        ResultDiv.innerText = "You Lose!";
        ResultDiv.style.color = 'rgb(240, 200, 1)';
        // computer score
        computerScore++;
        computerScoreDiv.innerText = computerScore;
    } else{
        ResultDiv.innerText = "You Win!";
        ResultDiv.style.color = 'white';
        // player Score
        playerScore++;
        playerScoreDiv.innerText = playerScore;
    }

}

// display Player Choice
const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper');
const playerScissors = document.querySelector('#scissors');
const player = document.querySelector('#player');

playerRock.addEventListener('click', function(){
    let playerChoice = 'Rock';
    let playerImage = 'Assets/Images/rock.png';
    let playerDiv = document.getElementById('player');
    let playerImg = document.createElement('img');
    playerImg.setAttribute('src', playerImage);
    playerImg.setAttribute('alt', playerChoice);
    playerImg.style.width = '95px';
    playerImg.style.height = '95px';

    playerDiv.innerHTML = '';
    playerDiv.appendChild(playerImg);
});

playerPaper.addEventListener('click', function(){
    let playerChoice = 'Paper';
    let playerImage = 'Assets/Images/paper.png';
    let playerDiv = document.getElementById('player');
    let playerImg = document.createElement('img');
    playerImg.setAttribute('src', playerImage);
    playerImg.setAttribute('alt', playerChoice);
    playerImg.style.width = '95px';
    playerImg.style.height = '95px';

    playerDiv.innerHTML = '';
    playerDiv.appendChild(playerImg);
});
playerScissors.addEventListener('click', function(){
    let playerChoice = 'Scissors';
    let playerImage = 'Assets/Images/scissors.png';
    let playerDiv = document.getElementById('player');
    let playerImg = document.createElement('img');
    playerImg.setAttribute('src', playerImage);
    playerImg.setAttribute('alt', playerChoice);
    playerImg.style.width = '95px';
    playerImg.style.height = '95px';

    playerDiv.innerHTML = '';
    playerDiv.appendChild(playerImg);
});

function restart(){
    location.reload();
}