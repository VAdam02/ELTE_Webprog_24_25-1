let timer = 0; //time ellapsed
let cycleTime = 1000;
let interval;

addEventListener("load", () => {
    const startButton = document.querySelector("#start");
    const stopButton = document.querySelector("#stop");

    startButton.addEventListener("click", () => {
        setTimeout(startTimer, 2000);
    })

    stopButton.addEventListener("click", () => {
        clearInterval(interval);
        interval = undefined;
    })
});

function startTimer() {
    if (interval != undefined) {
        console.log("Already running")
        return;
    }
    interval = setInterval(tick, cycleTime);
}

function tick() {
    timer++;
    document.querySelector("#output").innerHTML = timer;
}
