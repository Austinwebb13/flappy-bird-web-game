var pipe = document.getElementById('pipe');
var hole = document.getElementById('hole');

hole.addEventListener('animationiteration', () => {
    var random = -Math.floor((Math.random()*500)+300);
    hole.style.top = random + 'px';
});