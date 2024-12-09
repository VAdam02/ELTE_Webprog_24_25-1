const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let lastFrameTime = performance.now();

let earth = {
    X: 353,
    Y: 299
}

function next(currentTime = performance.now()) {
    const dt = (currentTime - lastFrameTime) / 1000;
    lastFrameTime = currentTime;

    update(dt); // update current state / jelenlegi állapot frissítése
    render(); // rerender the frame / képkocka újrarajzolása
    requestAnimationFrame(next);
}

function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

function update(dt) {

}

function render() {
    
}

next();
