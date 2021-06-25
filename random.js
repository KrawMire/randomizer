let formCollapsed = true;

// Neccessary elements
const inputForm = document.getElementById('input-area');
const passedNumbersArea = document.getElementById('numbers-area');
const currentNumberArea = document.getElementById('current-number');

function onGetRandom() {
    const maxNumber = getMaxNumberValue();

    if (!maxNumber) {
        alert('Wrong max number format');
        return;
    }
    
    const randomNumber = getRandomNumber(maxNumber);
    
    displayNumber(randomNumber);
    addPassedNumber(randomNumber);
    scrollPassedNumbersToEnd();
}

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function getMaxNumberValue() {
    const maxNumberValue = document.getElementById('max-number').value;
    console.log(maxNumberValue);
    return parseInt(maxNumberValue);
}

function addPassedNumber(number) {
    const passedNumberDiv = document.createElement('div');

    passedNumberDiv.className = 'random-number';
    passedNumberDiv.innerHTML = number.toString();

    passedNumbersArea.appendChild(passedNumberDiv);
}

function displayNumber(number) {
    currentNumberArea.innerHTML = number.toString();
}

function scrollPassedNumbersToEnd() {
    passedNumbersArea.scrollLeft = passedNumbersArea.scrollWidth;
}