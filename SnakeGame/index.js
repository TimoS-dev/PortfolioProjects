const field = document.getElementById("gameContainer");
const snakeField = document.getElementById("snakeContainer");
const pointCounter = document.getElementById("pointCounter");

let snakeHead = "";
let foodLocation = "";
let points = 0;
let snakeArray = [];

window.addEventListener("load", function () {
  createField(15);
  didTheSnakeEat();
});

function createField(x) {
  let fieldCounter = 0;
  for (i = 0; i < x; i++) {
    const container = document.createElement("div");
    for (j = 0; j < x; j++) {
      const tile = document.createElement("div");
      tile.classList.add(`tile`);
      if (fieldCounter % 2 == 0) {
        tile.classList.add("lightred");
      } else {
        tile.classList.add("darkred");
      }
      tile.classList.add(`${i}`);
      container.appendChild(tile);
      fieldCounter++;
    }
    field.appendChild(container);
  }
  createSnakeField(x);
}
function createSnakeField(x) {
  let snakeCounter = 0;
  for (i = 1; i <= x; i++) {
    const container = document.createElement("div");
    for (j = 1; j <= x; j++) {
      const tile = document.createElement("div");
      tile.classList.add(`R${j}`);
      tile.classList.add(`C${i}`);
      tile.classList.add(`tile`);
      if (snakeCounter % 2 == 0) {
        tile.classList.add("lightred");
      } else {
        tile.classList.add("darkred");
      }
      container.appendChild(tile);
      snakeCounter++;
    }
    snakeField.appendChild(container);
  }
}
function createFood() {
  let currentPosition = randomizer(15);
  document.getElementsByClassName(currentPosition)[0].classList.add("foodTile");
  foodLocation = currentPosition;
}
function didTheSnakeEat() {
  setInterval(function test1() {
    if (snakeHead == foodLocation && foodLocation !== "") {
      document
        .getElementsByClassName(snakeHead)[0]
        .classList.remove("foodTile");
      createFood();
      points = points + 1;
      pointCounter.innerHTML = points;
    }
  }, 100);
}

function checkGameOver(x) {
  let splitting = x.split(" ");
  let testArray = snakeArray;
  testArray = testArray.pop();
  console.log(snakeArray);
  console.log(testArray);
  if (testArray.length >= 1) {
    if (testArray == snakeHead) {
      console.log("not good");
    }
  }
  if (
    splitting[0] == "R0" ||
    splitting[0] == "R16" ||
    splitting[1] == "C0" ||
    splitting[1] == "C16"
  ) {
    alert("game over");
  }
}
function startGame() {
  let currentPosition = randomizer(15);
  snakeHead = currentPosition;
  snakeArray = [currentPosition];
  document
    .getElementsByClassName(currentPosition)[0]
    .classList.add("snakeTile");
  createFood();
  let direction = "";
  setInterval(function test() {
    if (direction == "up") {
      let newArray = currentPosition.split(" ");
      let newR = parseInt(newArray[0].substring(1)) - 1;
      let newPoint = `R${newR} ${newArray[1]}`;
      checkGameOver(newPoint);
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      currentPosition = newPoint;
      snakeHead = newPoint;
      snakeArray.push(newPoint);
      if (snakeHead == foodLocation) {
      } else {
        document
          .getElementsByClassName(snakeArray.shift())[0]
          .classList.remove("snakeTile");
      }
    }
    if (direction == "left") {
      let newArray = currentPosition.split(" ");
      let newC = parseInt(newArray[1].substring(1)) - 1;
      let newPoint = `${newArray[0]} C${newC}`;
      checkGameOver(newPoint);
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      currentPosition = newPoint;
      snakeHead = newPoint;
      snakeArray.push(newPoint);
      if (snakeHead == foodLocation) {
      } else {
        document
          .getElementsByClassName(snakeArray.shift())[0]
          .classList.remove("snakeTile");
      }
    }
    if (direction == "right") {
      let newArray = currentPosition.split(" ");
      let newC = parseInt(newArray[1].substring(1)) + 1;
      let newPoint = `${newArray[0]} C${newC}`;
      checkGameOver(newPoint);
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      currentPosition = newPoint;
      snakeHead = newPoint;
      snakeArray.push(newPoint);
      if (snakeHead == foodLocation) {
      } else {
        document
          .getElementsByClassName(snakeArray.shift())[0]
          .classList.remove("snakeTile");
      }
    }
    if (direction == "down") {
      let newArray = currentPosition.split(" ");
      let newR = parseInt(newArray[0].substring(1)) + 1;
      let newPoint = `R${newR} ${newArray[1]}`;
      checkGameOver(newPoint);
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      currentPosition = newPoint;
      snakeHead = newPoint;
      snakeArray.push(newPoint);
      if (snakeHead == foodLocation) {
      } else {
        document
          .getElementsByClassName(snakeArray.shift())[0]
          .classList.remove("snakeTile");
      }
    }
  }, 500);
  //listen to Keyboard WASD keys
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "w":
      case "ArrowUp":
        if (direction == "down") {
          break;
        }
        direction = "up";
        break;
      case "a":
      case "ArrowLeft":
        if (direction == "right") {
          break;
        }
        direction = "left";
        break;
      case "d":
      case "ArrowRight":
        if (direction == "left") {
          break;
        }
        direction = "right";
        break;
      case "s":
      case "ArrowDown":
        if (direction == "up") {
          break;
        }
        direction = "down";
        break;
      default:
        break;
    }
  });
}
function randomizer(x) {
  const row = Math.ceil(Math.random() * x);
  const column = Math.ceil(Math.random() * x);
  return `R${row} C${column}`;
}
