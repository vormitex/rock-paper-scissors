function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);

if(randomNumber === 0){
    return 'ROCK';
}
else if(randomNumber === 1){
    return 'PAPER';
}
else {
    return 'SCISSORS';
}
}

let computerSelection = getComputerChoice();




function playRound(){
    
    if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        return true;
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        return true;
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        return true;
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        return false;
    }
    else if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        return false;
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        return false;
    }
    else if (playerSelection === computerSelection)
        return 'tie';
    }
    
let playerCount = 0;
let computerCount = 0;

let getPlayerChoice = () =>{
    
    let answer =  prompt('Enter your choice!');
    let upperCaseAnswer = answer.toUpperCase();

    if(upperCaseAnswer === 'ROCK' || upperCaseAnswer === 'PAPER' || upperCaseAnswer === 'SCISSORS'){
    return upperCaseAnswer;
    }
    else{
        console.log('Enter valid choice!');
        getPlayerChoice();
    }
    }
    
let playerSelection;

function game(){
    for(let i=1;i<=5;i++){
        
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        playRound();

        if(playRound() === true){
            playerCount++;
            console.log('You =>',playerSelection);
            console.log('Computer =>',computerSelection);
            console.log(`Round ${i}, VICTORY!`);
            console.log('');
            console.log('SCORE:');
            console.log('You = ',playerCount);
            console.log('Computer = ',computerCount);
            console.log('');
            
        }
        else if(playRound() === false){
            computerCount++;
            console.log('You =>',playerSelection);
            console.log('Computer =>',computerSelection);
            console.log(`Round ${i},LOSS!`);
            console.log('');
            console.log('SCORE:');
            console.log('You = ',playerCount);
            console.log('Computer = ',computerCount);
            console.log('');
            
            
            
        }
        else if(playRound() === 'tie'){
            console.log('You =>',playerSelection);
            console.log('Computer =>',computerSelection);
            console.log(`Round ${i},TIE!`);
            console.log('');
            console.log('SCORE:');
            console.log('You = ',playerCount);
            console.log('Computer = ',computerCount);
            console.log('');
            
        }

    }



    if(playerCount>computerCount){
        console.log("Congratulations, You've won!");
    }
    else if(playerCount<computerCount){
        console.log('You lost!');
    }
    else{
        console.log('Good game, TIE!');
    }
}


game();

