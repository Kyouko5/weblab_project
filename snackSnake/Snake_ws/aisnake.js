let AI_SNAKE_SPEED = 5;
let AIScore = 0;

let AIsnakeBody = [
    {x:11, y:20},  // head
    {x:11, y:19},
    {x:11, y:18}
];

const updateAISnake = () => {
    for (let i = AIsnakeBody.length - 2; i >= 0; i--) {
        // 往下传递
        AIsnakeBody[i+1] = {...AIsnakeBody[i]};
    }

    const updateDirection = SimpleAIDirection();
    AIsnakeBody[0].x += updateDirection.x;
    AIsnakeBody[0].y += updateDirection.y;

}

const drawAISnake = (gameBoard) => {
    for (let i = 0; i < AIsnakeBody.length; i++) {
        const segment = AIsnakeBody[i];
        const snakeElement = document.createElement('div');

        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add("aisnake");
        
        gameBoard.appendChild(snakeElement);
    }
}