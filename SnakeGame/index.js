const field = document.getElementById("gameContainer");
const snakeField = document.getElementById("snakeContainer");

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

function startGame() {
  const startingPoint = randomizer(15);
  console.log(startingPoint);
  const test = document
    .getElementsByClassName(startingPoint)[0]
    .classList.add("snakeTile");
  //initialize array + array logic depending of keys
  window.addEventListener("keydown", (e) => {
    if (e.key == "w") {
      console.log("up");
    }
  });
  //listen to Keyboard WASD keys
}

function randomizer(x) {
  const row = Math.ceil(Math.random() * x);
  const column = Math.ceil(Math.random() * x);
  return `R${row} C${column}`;
}
