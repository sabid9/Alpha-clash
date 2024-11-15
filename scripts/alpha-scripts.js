function play(){
    /**
     * Step 1 - Hide the first screen adding hidden class
     * 
     */
    const addHide = document.getElementById('home-page');
    addHide.classList.add('hidden');

    const showPlayGround = document.getElementById('play-ground');
    showPlayGround.classList.remove('hidden')
}