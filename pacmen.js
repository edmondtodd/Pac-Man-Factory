var pos = 0;
const pacArray = [
    ['./img/PacMan1.png', './img/PacMan2.png'],
    ['./img/PacMan3.png', '.img/PacMan4.png']
];
var direction = 0;
const pacMen = [];

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}

function makePac() {

    let velocity = setToRandom(10);
    let position = setToRandom(200);
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = './img/PacMan1.png';
    newimg.width = 100;
    newimg.style.left = position.x;
    newimg.style.top = position.y;
    game.appendChild(newimg);
    return {
        position,
        velocity,
        newimg
    }
}

function update() {
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
        item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
    if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
        item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

function makeOne() {
    pacMen.push(makePac()); 
}
