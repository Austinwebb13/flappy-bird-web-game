var hole = document.getElementById('hole');
var pipe = document.getElementById('pipe');
var bird = document.getElementById('bird');
var jumping = 0;
var isPaused = false;

//Giving the hole animation a random variable
hole.addEventListener('animationiteration', () => {
    var random = Math.random()*2;
    var top = (random*220)+250;
    hole.style.top = -(top) + 'px';
});


//pausing the game




//getting bird to float down(gravity)
setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    if(jumping==0){
bird.style.top = (birdTop+4)+"px"
    }
//hit detection
    var pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue('left'));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    var cTop = -(900-birdTop);
    if((birdTop>880) || ((pipeLeft<40) && (pipeLeft>-50) && ((cTop<holeTop)||
    (cTop>holeTop+ 170)))) {
        alert('Game Over.');
        bird.style.top = 400 + 'px'
    }
    if(birdTop> 875){
        alert('Game Over');
        bird.style.top =400 + 'px'
    }
    if(birdTop< 220){
        alert('Game Over');
        bird.style.top =400 + 'px'
    }
}, 10); 

//getting the bird to jump up
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var birdTop = 
        parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    if((birdTop>6 ) && (jumpCount<15)){
        bird.style.top = (birdTop-7)+"px";
    }
        if (jumpCount>20) {
            clearInterval(jumpInterval);
            jumping =0;
            jumpCount=0;
        }
        jumpCount++;
    }, 10);
}
