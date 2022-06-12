var pipe = document.getElementById('pipe');
var hole = document.getElementById('hole');
var score = 0;
var isJumping;
var spacePressed

function setInitialValues(){
    gameStopped = false;
    isJumping = false;
}

hole.addEventListener('animationiteration', () => {
    var random = -Math.floor((Math.random()*500)+300);
    hole.style.top = random + 'px';
});

function setEventListeners() {

document.body.parentElement.addEventListener( 'click', () => {
    if (gameStopped) return
    characterJump()
})

document.spacePressed = e => {
    e = e || window.event

    if ( e.keycode === 32) {
        if (gameStopped) return
        characterJump()
        }
    }
}

function characterJump(){
   isJumping = true; 

   const jumpInterval = ('setInterval'); () => {
    chnageGameState({ diff: -3, direction: 'up'})

    if ( jumpCount > 20) {

        clearInterval(  jumpInterval);
        isJumping = false;
        jumpCount = 0;
    }

    jumpCount++}, 10
   
}

function chnageGameState(){

}