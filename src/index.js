// TODO
/**
 1. Create canvas context
 2. Create and draw ball
 3. Create a Paddle
 4. Create bricks
 5. Score window
 6. Update the screen
 7. Rules button
 8. Rules for the animation
 9. Move paddle
 10. Keyboard events with the paddle
 11. Move ball
 12. Set the wall boundaries
 13. Score updates
 14. When the ball breaks the bricks
 15. Lose - redraw the bricks and reset the score.
 *
 *
 */

 // ANCHOR DOM Selectors
const rulesBtn = document.getElementById('rules-btn')
const closeBtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')

// ANCHOR Canvas DOM Selector
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


let score= 0 // we set our score board to zero

const brickRowCount = 9
const brickColumnCount = 5

 // create ball

const ball = {
    x: canvas.width / 2, //Start displaying in the middle of the screen
    y: canvas.height / 2, // Start displaying the ball in the middle of the screen
    size: 10,
    speed: 4, // Animation speed props
    dx: 4, // Animation direction on the x axis
    dy: -4 // animation direction on the y axis with - so it does not disappear
}
 
 // create paddle

const paddle = {
    x: canvas.width /2 -40, // We are taking half width of the paddle
                            // to display it in the center of the canvas
    y: canvas.height -20,    // and displaying it slightly above the bottom of the canvas
    w: 80, //paddle size height
    h: 10, //paddle size width
    speed: 8,
    dx: 0 // Only moves on the x-axis
}

 // create brick
const brickInfo = {
    w: 70, // bricks will share the same properties
    h: 20,
    padding:10,
    offsetX: 45,
    offsetY: 60,
    visible: true
}

// create brick array
const bricks = [] //init bricks array
for(let i=0; i < brickRowCount; i++) { //loops through the array rows
    bricks[i] = [] // set the row bricks iteration to an empty array
    for(let j=0; j < brickColumnCount; j++) { //loops through the array column
        const x = i *(brickInfo.w + brickInfo.padding) + brickInfo.offsetX // i is the row iteration for each brick
        const y = j *(brickInfo.h + brickInfo.padding) + brickInfo.offsetY // we are looping and setting the position for each brick
        bricks[i][j] = {x, y, ...brickInfo} // takes the 2D array and populates it with the appropriate values including calculated XY coordinates
    }
}

console.log(bricks)

// Create the ball and draw it on the canvas
function drawBall() {
    ctx.beginPath() // We are going to create a path
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2) // draw an arc to build a ball
    ctx.fillStyle = '#0095dd' // Style the ball and arc prop
    ctx.fill()
    ctx.closePath()
}

// Create and draw the paddle on canvas
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = '#0095dd'
    ctx.fill()
    ctx.closePath()
}