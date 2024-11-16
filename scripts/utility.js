// Hide an element from classlist
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// Add an element to classlist
function addElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// Generate random alphabet
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const generateAlphabet = alphabet[index];
    return generateAlphabet;
    

}

// set keyboard background color
function setKeyboardBackgroud(elementId){
    const currentKey = document.getElementById(elementId);
    currentKey.classList.add('bg-orange-500');
}

// Remove keyboard background color
function removeKeyboardBackgroud(elementId){
    const currentKey = document.getElementById(elementId);
    currentKey.classList.remove('bg-orange-500');
}

// get number from score card
function getElementValuebyId(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}

function setElementValueById(elementId, value){
    const element  = document.getElementById(elementId);
    element.innerText = value;

}

function getTextElementById(elementId){
    const getAlphabetElement =  document.getElementById(elementId);
    const alphabetInnerText = getAlphabetElement.innerText
    const text  = alphabetInnerText.toLowerCase();
    return text;
}

