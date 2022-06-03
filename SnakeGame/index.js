const field = document.getElementById("gameContainer");
const snakeField = document.getElementById("snakeContainer");

let snakeHead = "";
let foodLocation = "";

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
    }
  }, 100);
}

function startGame() {
  let currentPosition = randomizer(15);
  snakeHead = currentPosition;
  let snakeArray = [currentPosition];
  document
    .getElementsByClassName(currentPosition)[0]
    .classList.add("snakeTile");
  createFood();
  //initialize array + array logic depending on keys + continous movement
  let direction = "";
  setInterval(function test() {
    if (direction == "up") {
      let newArray = currentPosition.split(" ");
      let newR = parseInt(newArray[0].substring(1)) - 1;
      let newPoint = `R${newR} ${newArray[1]}`;
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      currentPosition = newPoint;
      snakeHead = newPoint;
      snakeArray.push(newPoint);
      if (snakeHead == foodLocation) {
        console.log("snake grows!");
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
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      currentPosition = newPoint;
      snakeHead = newPoint;
      snakeArray.push(newPoint);
      if (snakeHead == foodLocation) {
        console.log("snake grows!");
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
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      currentPosition = newPoint;
      snakeHead = newPoint;
      snakeArray.push(newPoint);
      if (snakeHead == foodLocation) {
        console.log("snake grows!");
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
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      currentPosition = newPoint;
      snakeHead = newPoint;
      snakeArray.push(newPoint);
      if (snakeHead == foodLocation) {
        console.log("snake grows!");
      } else {
        document
          .getElementsByClassName(snakeArray.shift())[0]
          .classList.remove("snakeTile");
      }
    }
    console.log(snakeHead + foodLocation);
  }, 1000);
  //listen to Keyboard WASD keys
  window.addEventListener("keydown", (e) => {
    if (e.key == "w") {
      let newArray = currentPosition.split(" ");
      let newR = parseInt(newArray[0].substring(1)) - 1;
      let newPoint = `R${newR} ${newArray[1]}`;
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      direction = "up";
    }
    if (e.key == "a") {
      let newArray = currentPosition.split(" ");
      let newC = parseInt(newArray[1].substring(1)) - 1;
      let newPoint = `${newArray[0]} C${newC}`;
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      direction = "left";
    }
    if (e.key == "d") {
      let newArray = currentPosition.split(" ");
      let newC = parseInt(newArray[1].substring(1)) + 1;
      let newPoint = `${newArray[0]} C${newC}`;
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      direction = "right";
    }
    if (e.key == "s") {
      let newArray = currentPosition.split(" ");
      let newR = parseInt(newArray[0].substring(1)) + 1;
      let newPoint = `R${newR} ${newArray[1]}`;
      document.getElementsByClassName(newPoint)[0].classList.add("snakeTile");
      direction = "down";
    }
  });
}
function randomizer(x) {
  const row = Math.ceil(Math.random() * x);
  const column = Math.ceil(Math.random() * x);
  return `R${row} C${column}`;
}
