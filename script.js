const gameBoard = document.getElementById("game-board");


const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

class Grid {
  constructor(gridElement) {
    this.cells = [];
    for (let i = 0; i < CELLS_COUNT; i++) {
      this.cells.push(
        new Cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
      );
    }
  }

  getRandomEmptyCell(){
    const emptyCells = this.cells.filter(cell => cell.isEmpty());
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  }
}

class Cell {
    constructor(gridElement, x, y) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      gridElement.append(cell);
      this.x = x;
      this.y = y;
    }
  
    linkTile(tile) {
      tile.setXY(this.x, this.y);
      this.linkedTile = tile;
    }
    isEmpty() {
      return !this.linkedTile;
    }
}

class Tile {
    constructor(gridElement) {
      this.tileElement = document.createElement("div");
      this.tileElement.classList.add("tile");
      this.setValue(Math.random() > 0.5 ? 2 : 4);
      gridElement.append(this.tileElement);
    }
  
    setXY(x, y) {
      this.x = x;
      this.y = y;
      this.tileElement.style.setProperty("--x", x);
      this.tileElement.style.setProperty("--y", y);
    }
}

const grid = new Grid(gameBoard);
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
