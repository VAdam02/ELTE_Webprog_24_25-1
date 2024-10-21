const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const downloadRegionInput = document.querySelector('#region')
const downloadButton = document.querySelector('#download')

const download = {
    state: 0, // 0: no download in progress, 1: download in progress, 2: download finished, 3: download failed
    packagePos: 800,
    region: null
}

// Time-based animation (from the lecture slide)
let lastFrameTime = performance.now()

function next(currentTime = performance.now()) {
  const dt = (currentTime - lastFrameTime) / 1000 // seconds
  lastFrameTime = currentTime

  update(dt) // Update current state
  render() // Rerender the frame
  requestAnimationFrame(next)
}

function update(dt) {
}

function render() {
}

// Start
const serverImage = new Image()
const clientImage = new Image()
const packageImage = new Image()
serverImage.src = 'img/server.png'
clientImage.src = 'img/client.png'
packageImage.src = 'img/package.png'

next()

// =============== Segédfüggvények =================

function isCollision(box1, box2) {
  return !(
    box2.y + box2.height < box1.y ||
    box1.x + box1.width < box2.x ||
    box1.y + box1.height < box2.y ||
    box2.x + box2.width < box1.x
  )
}

function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a
}