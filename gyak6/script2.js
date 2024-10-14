let canvas;
let ctx;

addEventListener("load", () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    canvas.addEventListener("click", () => {
        if (gameState == 0) {
            gameState = 1;
        }
    })

    next();
})

let lastFrame = performance.now();
function next() {
    const deltatime = (performance.now() - lastFrame) / 1000; //in seconds
    lastFrame = performance.now();

    update(deltatime);
    render();

    requestAnimationFrame(next);
}

let gameState = 0;

function update(deltatime) {
    if (gameState == 0) {
        console.log("Waiting for click")
    } else if (gameState == 1) {
        plane.vx = 200;
    }

    plane.x += plane.vx * deltatime;
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(plane.img, plane.x, plane.y, plane.width, plane.height)
}

const plane = {
    x: 0,
    y: 20,
    width: 60,
    height: 30,
    vx: 0,
    img: new Image()
}
plane.img.src = "plane.png";
