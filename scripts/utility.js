function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function addElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const generateAlphabet = alphabet[index];
    return generateAlphabet;
    

}

function setKeyboardBackgroud(elementId){
    const currentKey = document.getElementById(elementId);
    currentKey.classList.add('bg-orange-500');
}