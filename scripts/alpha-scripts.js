// function play(){
//     /**
//      * Step 1 - Hide the first screen adding hidden class
//      * 
//      */
//     const addHide = document.getElementById('home-page');
//     addHide.classList.add('hidden');

//     const showPlayGround = document.getElementById('play-ground');
//     showPlayGround.classList.remove('hidden')
// }
function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log(alphabet);
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    console.log(currentAlphabetElement);
    
    currentAlphabetElement.innerText = alphabet;
    setKeyboardBackgroud(alphabet);
}

function play(){
    hideElementById('home-page');
    addElementId('play-ground');
    continueGame();
}