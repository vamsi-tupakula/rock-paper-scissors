let your_text = document.querySelector("#your_text");
let computer_text = document.querySelector("#computer_text");
let result_text = document.querySelector("#result_text");
let result_box = document.querySelector(".result-box");
let header = document.querySelector('.title');

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
        result_text.style.cssText = "color: #2ecc71";
        result_box.style.cssText = "box-shadow: 0 0 2em #2ecc71";
        header.style.cssText = "background: #2ecc71";
    }
    else if(choices[yourSeletion][computerSelection] == 'lose'){
        result_text.innerHTML = 'You lose';
        result_text.style.cssText = "color: #e74c3c";
        result_box.style.cssText = "box-shadow: 0 0 2em #e74c3c";
        header.style.cssText = "background: #e74c3c";
    }
    else{
        result_text.innerHTML = 'Game Drawn';
        result_text.style.cssText = "color: #e67e22";
        result_box.style.cssText = "box-shadow: 0 0 2em #e67e22";
        header.style.cssText = "background: #e67e22";
    }
}

function random_num(){
    return Math.floor(Math.random()*3);
}