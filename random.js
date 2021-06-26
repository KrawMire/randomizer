let firstPassed = false;

// Neccessary elements
const inputForm = document.getElementById('input-area');
const passedNumbersArea = document.getElementById('numbers-area');
const currentNumberArea = document.getElementById('current-number-area');
let currentNumberSpan = document.getElementById('current-number')

function onClearResults() {
    while(passedNumbersArea.firstChild) {
        passedNumbersArea.removeChild(passedNumbersArea.firstChild);
    }

    currentNumberSpan = document.getElementById('current-number');
    if (currentNumberSpan) {
        currentNumberSpan.parentNode.removeChild(currentNumberSpan);
    }

    firstPassed = false;
}

function onGetRandom() {
    const maxNumber = getMaxNumberValue();

    if (!maxNumber) {
        alert('Wrong max number format');
        return;
    }
    
    const randomNumber = findRandomNumber(maxNumber);
    
    displayNumber(randomNumber);
    addPassedNumber(randomNumber);
    scrollPassedNumbersToEnd();

    firstPassed = true;
}

function findRandomNumber(maxNumber) {
    return getRandomNumber(maxNumber);
}

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function getMaxNumberValue() {
    const maxNumberValue = document.getElementById('max-number').value;
    
    return parseInt(maxNumberValue);
}

function addPassedNumber(number) {
    const passedNumberDiv = document.createElement('div');

    passedNumberDiv.className = 'random-number';
    passedNumberDiv.innerHTML = number.toString();

    passedNumbersArea.appendChild(passedNumberDiv);
}

function displayNumber(number) {
    if (!firstPassed) {
        const currentNumber = document.createElement('span');
        currentNumber.id = 'current-number';
        currentNumber.innerHTML = number.toString();
        currentNumberArea.appendChild(currentNumber);
    } else {
        const currentNumber = document.getElementById('current-number');
        currentNumber.innerHTML = number.toString();
    }
}

function scrollPassedNumbersToEnd() {
    passedNumbersArea.scrollLeft = passedNumbersArea.scrollWidth;
}