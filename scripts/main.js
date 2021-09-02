let gridSize = 50
// cell color
let cellColorR = 0
let cellColorG = 0
let cellColorB = 0
let cellColorOpacity = 1

// INPUT RANGE SLIDER THE SLIDER AND VALUE
const rangeGridSize = document.querySelector('#range-grid-size')
const rangeGridValue = document.querySelector('.range-slider__value')
// Grab the grid container
let gridContainer = document.querySelector('.grid-container')
// Grab the reset button and reset the btn
const clearBtn = document.querySelector('button.btn-reset')
clearBtn.addEventListener('click', (e) => createGrid(gridSize))

// change the size of grid
rangeGridSize.onchange = function (e) {
  gridSize = parseInt(e.target.value)
  rangeGridValue.textContent = gridSize
  createGrid(gridSize)
}

function onMouseOverCell(e) {
  const dataGridLocation = e.target.getAttribute('data-cell')
  const cell = document.querySelector(
    `div.grid-container__cell[data-cell="${dataGridLocation}"]`
  )
  cell.style.backgroundColor = `rgba(${cellColorR}, ${cellColorG}, ${cellColorB}, ${cellColorOpacity})`
}

// clear the grid
function clearGrid() {
  // CLEAR the grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild)
  }
}

// create the grid
function createGrid(cellNbr) {
  // first clear the grid
  clearGrid()

  for (let row = 0; row < cellNbr; row++) {
    let rowContainer = document.createElement('div')
    rowContainer.setAttribute('class', 'grid-container__row')
    rowContainer.style.height = `calc(10% * ${cellNbr})`

    for (let col = 0; col < cellNbr; col++) {
      // console.log(gridContainer)
      let div = document.createElement('div')
      div.classList.add('grid-container__cell')
      div.style.width = `calc(100% / ${cellNbr})`
      div.setAttribute('data-cell', `${row}x${col}`)
      // console.log(`GRID CELL : ${row} ${col}`)
      rowContainer.appendChild(div)
    }

    gridContainer.appendChild(rowContainer)
  }

  // add mouse over listener to each cell
  const gridCells = document.querySelectorAll('.grid-container__cell')
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', onMouseOverCell)
  })
}

createGrid(gridSize)
