'use strict';

const button = document.querySelector('.js-button');
const numberInput = document.querySelector('.js-input');
const clue = document.querySelector('.js-clue');
const counterMessage = document.querySelector('.js-counter');
const restart = document.querySelector('.js-restart')

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);


function checkNumber () {
    const numberValue = parseInt(numberInput.value);

    if (numberValue < 1 || numberValue > 100) {
        clue.innerHTML = 'El número debe estar entre 1 y 100';
    } else if (numberValue === randomNumber) {
        clue.innerHTML = '¡¡HAS GANADO CAMPEONA!!';
    } else if (numberValue < randomNumber){
        clue.innerHTML = 'Pista: Demasiado bajo';
    } else if (numberValue > randomNumber){
        clue.innerHTML = 'Pista: Demasiado alto';
    }
}


let i = 0

function counter () {
    i++;
    counterMessage.innerHTML = `Número de intentos: ${i}`;
}

function handleClick(event) {
    event.preventDefault();
    
    checkNumber();
    counter();
}

const handleRestart = () => {
    i = 0
    counterMessage.innerHTML = `Número de intentos: ${i}`;
    clue.innerHTML = 'Pista: Escribe el número y dale a Prueba'
    randomNumber = getRandomNumber(100);


}

button.addEventListener('click', handleClick);
restart.addEventListener('click', handleRestart)