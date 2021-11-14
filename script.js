let your_text = document.querySelector("#your_text");
let computer_text = document.querySelector("#computer_text");
let result_text = document.querySelector("#result_text");

const options = ['rock','paper','scissor'];

const choices = {
    'rock': {
        'rock': 'draw',
        'paper': 'lose',
        'scissor': 'win'
    },
    'paper': {
        'rock': 'win',
        'paper': 'draw',
        'scissor': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'paper': 'win',
        'scissor': 'drawn'
    }
};

function check(yourSeletion){
    let computerSelection = options[random_num()];

    your_text.innerHTML = `Your Choice :: ${yourSeletion.toUpperCase()}`;
    computer_text.innerHTML = `Computer Choice :: ${computerSelection.toUpperCase()}`;
    
    if(choices[yourSeletion][computerSelection] == 'win'){
        result_text.innerHTML = 'You Won';
    }
    else if(choices[yourSeletion][computerSelection] == 'lose'){
        result_text.innerHTML = 'You lose';
    }
    else{
        result_text.innerHTML = 'Game Drawn';
    }
}

function random_num(){
    return Math.floor(Math.random()*3);
}