let canvas;
let ctx;

addEventListener("load", () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    ctx.drawImage(plane.img, plane.x, plane.y, plane.width, plane.height)
})

const plane = {
    x: 0,
    y: 20,
    width: 60,
    height: 30,
    vx: 0,
    img: new Image()
}
plane.img.src = "plane.png";
