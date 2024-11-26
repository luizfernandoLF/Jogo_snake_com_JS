(function () {
  let FPS = 10;
  const SIZE = 40;
  const SPEED_INCREMENT_INTERVAL = 60;

  let board, snake, food, foodColor, score, intervalId, frameCount;
  let isPaused = true;
  let gameOver = false;

  function init() {
    clearInterval(intervalId);
    document.getElementById("board").innerHTML = "";
    board = new Board(SIZE);
    snake = new Snake([[4, 4], [4, 5], [4, 6]]);
    score = 0;
    frameCount = 0;
    FPS = 10;
    document.getElementById("scoreboard").textContent = "0000";
    generateFood();
    gameOver = false;
    if (!isPaused) {
      intervalId = setInterval(run, 1000 / FPS);
    }
  }

  function generateFood() {
    let x, y;
    do {
      x = Math.floor(Math.random() * SIZE) + 1;
      y = Math.floor(Math.random() * SIZE) + 1;
    } while (snake.body.some(segment => segment[0] === x && segment[1] === y));
    
    const isRedFood = Math.random() < 1/3;
    food = [x, y];
    foodColor = isRedFood ? 'red' : 'black';
    document.querySelector(`#board tr:nth-child(${food[0]}) td:nth-child(${food[1]})`).style.backgroundColor = foodColor;
  }

  class Board {
    constructor(size) {
      this.element = document.createElement("table");
      this.element.setAttribute("id", "board");
      this.color = "#ccc";
      document.getElementById("board").appendChild(this.element);
      for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        this.element.appendChild(row);
        for (let j = 0; j < size; j++) {
          const field = document.createElement("td");
          row.appendChild(field);
        }
      }
    }
  }

  class Snake {
    constructor(body) {
      this.body = body;
      this.color = "purple";
      this.direction = 1;
      this.nextDirection = 1; 
      this.body.forEach(field => document.querySelector(`#board tr:nth-child(${field[0]}) td:nth-child(${field[1]})`).style.backgroundColor = this.color);
    }
    walk() {
      this.direction = this.nextDirection;
      const head = this.body[this.body.length - 1];
      let newHead;
      switch (this.direction) {
        case 0:
          newHead = [head[0] - 1, head[1]];
          break;
        case 1:
          newHead = [head[0], head[1] + 1];
          break;
        case 2:
          newHead = [head[0] + 1, head[1]];
          break;
        case 3:
          newHead = [head[0], head[1] - 1];
          break;
        default:
          break;
      }
      if (newHead[0] < 1 || newHead[0] > SIZE || newHead[1] < 1 || newHead[1] > SIZE || this.body.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])) {
        alert('Fim do jogo!');
        clearInterval(intervalId);
        gameOver = true;
        return;
      }
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        if (foodColor === 'red') {
          score += 2;
        } else {
          score += 1;
        }
        document.getElementById("scoreboard").textContent = score.toString().padStart(4, '0');
        generateFood();
      } else {
        const oldTail = this.body.shift();
        document.querySelector(`#board tr:nth-child(${oldTail[0]}) td:nth-child(${oldTail[1]})`).style.backgroundColor = board.color;
      }
      this.body.push(newHead);
      document.querySelector(`#board tr:nth-child(${newHead[0]}) td:nth-child(${newHead[1]})`).style.backgroundColor = this.color;
    }
    changeDirection(direction) {
      if (Math.abs(this.direction - direction) !== 2) {
        this.nextDirection = direction;
      }
    }
  }

  function run() {
    if (!isPaused) { 
      snake.walk();
      frameCount++;
      if (frameCount % SPEED_INCREMENT_INTERVAL === 0) {
        FPS += 1;
        clearInterval(intervalId);
        intervalId = setInterval(run, 1000 / FPS);
      }
    }
  }

  function togglePause() {
    if (gameOver) return; // Não permitir pausar/despausar se o jogo terminou
    isPaused = !isPaused;
    if (!isPaused) {
      intervalId = setInterval(run, 1000 / FPS);
    } else {
      clearInterval(intervalId);
    }
  }

  document.getElementById("start-game").addEventListener("click", () => {
    document.getElementById("instructions-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    isPaused = true;
    init();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "p") {
      togglePause();
    } else if (e.key === "s" && (isPaused || gameOver)) {
      isPaused = false;
      gameOver = false;
      init();
    } else {
      switch (e.key) {
        case "ArrowUp":
          snake.changeDirection(0);
          break;
        case "ArrowRight":
          snake.changeDirection(1);
          break;
        case "ArrowDown":
          snake.changeDirection(2);
          break;
        case "ArrowLeft":
          snake.changeDirection(3);
          break;
        default:
          break;
      }
    }
  });
})();

