'use strict';

/*
console.log(document.querySelector('.message').textContent);

const a = document.querySelector('.message').textContent = 'Correct Number!';
console.log(a);

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 23;
document.querySelector('.guess').value = 10;

event listener is used where we have to perform any events like click, button ,submit or any specific events.
*/

//gives a random number between 0 and 1 always 
// const number = Math.random();
//gives the random number between 0 and 20
// const number = Math.random() * 20;
// console.log(number);

//removes the extra decimal part from 0 to 20 and add 1 to the number
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}

const displayscore = function (score) {
    document.querySelector('.score').textContent = score;
}

const displaycolor = function (backgroundColor) {
    document.querySelector('body').style.backgroundColor = backgroundColor;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess);

    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number';
        displayMessage('No Number');
    }

    //when player wins it turns into green
    else if (guess == SecretNumber) {
        displayMessage('Correct Number!');
        displayNumber(SecretNumber);
        displaycolor('green');
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //when guess is too high
    else if (guess > SecretNumber) {
        if (score > 0) {
            displayMessage('Greater Number');
            score--;
            displayscore(score);
        } else {
            displayMessage('You loose the game');
        }
    }

    //when guess is too low
    else if (guess < SecretNumber) {
        displayMessage('Smaller Number');
        console.log('Too low');

    }
});

//document.querySelector('.number').textContent = guess;
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing');
    displayscore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    displaycolor('#222');
    document.querySelector('.number').style.width = '15rem';
})
