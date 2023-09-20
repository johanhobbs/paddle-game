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
close rules = document.getElementById('rules')

// ANCHOR Canvas DOM Selector
const canvas = document.getElementById('canvas')


let score= 0 // we set our score board to zero

const brickRowCount = 9
const brickColumnCount = 5

 // create ball

const ball = {
    x:canvas.width / 2, //Start displaying in the middle of the screen
    y:canvas.height / 2, // Start displaying the ball in the middle of the screen
    size: 10,
    speed: 4, // Animation speed props
    dx: 4, // Animation direction on the x axis
    dy: -4 // animation direction on the y axis with - so it does not disappear
}
 
 // create paddle

const paddle = {}

 // create brick
const brickInfo = {}

// create brick array
const bricks = []

