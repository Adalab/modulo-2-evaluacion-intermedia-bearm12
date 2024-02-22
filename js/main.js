'use strict';

const button = document.querySelector('.js-button');
const numberInput = document.querySelector('.js-input');
const clue = document.querySelector('.js-clue');
const counterMessage = document.querySelector('.js-counter');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${randomNumber}`);

function checkNumber () {
    const numberValue = numberInput.value;

    if (parseInt(numberValue) < 1 || numberValue > 100) {
        clue.innerHTML = 'El número debe estar entre 1 y 100';
    } else if (parseInt(numberValue) === randomNumber) {
        clue.innerHTML = '¡¡HAS GANADO CAMPEONA!!';
    } else if (parseInt(numberValue) < randomNumber){
        clue.innerHTML = 'Pista: Demasiado bajo';
    } else if (parseInt(numberValue) > randomNumber){
        clue.innerHTML = 'Pista: Demasiado alto';
    }
}

function counter () {

}

function handleClick(event) {
    event.preventDefault();
    
    checkNumber()
}

button.addEventListener('click', handleClick)