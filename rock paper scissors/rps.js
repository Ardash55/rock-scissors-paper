let rock = 'камень';
let scissors = 'ножницы';
let paper = 'бумага';
let user;
let comp;
let score = {
    wins: 0,
    loses: 0,
    ties: 0
}

// let localScore = localStorage.setItem('score', JSON.stringify(score));
let scoreParse = JSON.parse(localStorage.getItem('score'));

function compChoise() {
    let choise = Math.random();
    if (choise < 0.34) {
        comp = rock;
    } else if (choise < 0.67) {
        comp = scissors;
    } else {
        comp = paper;
    }
}

function result() {
    if (comp == user) {
        alert('Ничья');
        scoreParse.ties++;
    } else if (user == rock && comp == scissors) {
        alert('Победа');
        scoreParse.wins++;
    } else if (user == scissors && comp == paper) {
        alert('Победа');
        scoreParse.wins++;
    } else if (user == paper && comp == rock) {
        alert('Победа');
        scoreParse.wins++;
    } else if (user == rock && comp == paper) {
        alert('Поражение');
        scoreParse.loses++;
    } else if (user == scissors && comp == rock) {
        alert('Поражение');
        scoreParse.loses++;
    } else if (user == paper && comp == scissors) {
        alert('Поражение');
        scoreParse.loses++;
    }
    score = localStorage.setItem('score', JSON.stringify(scoreParse));
    console.log(score);
    document.getElementById('displayWins').textContent = 'Побед: ' + scoreParse.wins

    document.getElementById('displayLoses').textContent = 'Поражений: ' + scoreParse.loses

    document.getElementById('displayTies').textContent = 'Ничьих: ' + scoreParse.ties
}

function choiseRock() {
    user = rock;
    compChoise();
    result();
}

function choiseScissors() {
    user = scissors;
    compChoise();
    result();
}

function choisePaper() {
    user = paper;
    compChoise();
    result();
}

document.getElementById('displayWins').textContent = 'Побед: ' + scoreParse.wins

document.getElementById('displayLoses').textContent = 'Поражений: ' + scoreParse.loses

document.getElementById('displayTies').textContent = 'Ничьих: ' + scoreParse.ties