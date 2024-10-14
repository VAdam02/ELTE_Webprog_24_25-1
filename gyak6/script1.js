let timer = 0; //time ellapsed
let cycleTime = 1000;
let interval;

addEventListener("load", () => {
    const startButton = document.querySelector("#start");
    const stopButton = document.querySelector("#stop");

    startButton.addEventListener("click", () => {
        interval = setInterval(tick, cycleTime);
    })

    stopButton.addEventListener("click", () => {
        clearInterval(interval);
    })
});

function tick() {
    timer++;
    document.querySelector("#output").innerHTML = timer;
}
