let canvas;
let ctx;

addEventListener("load", () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    canvas.addEventListener("click", () => {
        if (gameState == 0) {
            gameState = 1;
        } else if (gameState == 1) {
            gameState = 2;
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

/*
0 - waiting for start
1 - flying
2 - drop
3 - lose
4 - win
*/
let gameState = 0;

function update(deltatime) {
    house.y = canvas.height - house.height - 20;

    plane.x += plane.vx * deltatime;

    if (gameState == 0) {
        console.log("Waiting for click")
    } else if (gameState == 1) {
        plane.vx = 200;
        parcel.x = plane.x;
        parcel.y = plane.y + plane.height;
    } else if (gameState == 2) {
        console.log("drop");

        parcel.vy += gravity * deltatime;

        parcel.x += parcel.vx * deltatime;
        parcel.y -= parcel.vy * deltatime;

        if (parcel.y > canvas.height || parcel.x > canvas.width) {
            gameState = 3;
        }
    }

}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(plane.img, plane.x, plane.y, plane.width, plane.height)
    ctx.drawImage(parcel.img, parcel.x, parcel.y, parcel.width, parcel.height)
    ctx.drawImage(house.img, house.x, house.y, house.width, house.height)
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


const parcel = {
    x: 0,
    y: plane.y + plane.height,
    width: 30,
    height: 30,
    img: new Image(),
    vx: 200,
    vy: -50
}
parcel.img.src = "parcel.png"

const house = {
    x: 400,
    y: 0,
    width: 100,
    height: 100,
    img: new Image()
}
house.img.src = "house.png"

const gravity = -100;
