


function addKeyboardKeyupEvent(event){
    const currentPrassed = event.key;
    console.log(currentPrassed);
    
    

    if(currentPrassed === 'Escape'){
        gameOver();
    }
    // const currentAlphabetElement = document.getElementById('current-alphabet');
    // const expectedAlphabet = currentAlphabetElement.innerText;
    // const currentAlphabet = expectedAlphabet.toLowerCase();
    const currentAlphabet = getTextElementById('current-alphabet');


    if(currentPrassed === currentAlphabet){
        console.log('You got a point');
        removeKeyboardBackgroud(currentAlphabet)
        continueGame();

        // Score area
        const currentScore = getElementValuebyId('current-score');
        const updatedScore = currentScore + 1;

        setElementValueById('current-score',updatedScore);
        setElementValueById('game-point',updatedScore);
        
        
        
    }
    else{
        console.log('you lost a life');
        const currentLife = getElementValuebyId('current-life');
        const updatedlife = currentLife - 1;

        setElementValueById('current-life',updatedlife);
        if(updatedlife === 0){
           gameOver();
        }
        
    }
    
}

document.addEventListener('keyup', addKeyboardKeyupEvent);




function continueGame(){
    // Generate random alphabet
    const alphabet = getRandomAlphabet();
    console.log(alphabet);
    
    // Show the alphabet on the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set keyboard background 
    setKeyboardBackgroud(alphabet);
}

function play(){

    setElementValueById('current-life',3);
    setElementValueById('current-score',0);

    hideElementById('home-page');
    hideElementById('score-card');
    addElementId('play-ground');
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    addElementId('score-card');
    const currentAlphabet =  getTextElementById('current-alphabet');
    removeKeyboardBackgroud(currentAlphabet);
}