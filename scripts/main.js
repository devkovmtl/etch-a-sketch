let gridSize = 50
// INPUT RANGE SLIDER THE SLIDER AND VALUE
const rangeGridSize = document.querySelector('#range-grid-size')
const rangeGridValue = document.querySelector('.range-slider__value')
// GRab the grid container
let gridContainer = document.querySelector('.grid-container')

rangeGridSize.onchange = function (e) {
  gridSize = parseInt(e.target.value)
  rangeGridValue.textContent = gridSize
}

function createGrid(cellNbr) {
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
}

createGrid(gridSize)

//   const gridCells = document.querySelectorAll('div.grid-cell')
//   gridCells.forEach((gridCell) => {
//     gridCell.addEventListener('mouseover', onMouseOverGrid)
//   })
// }

// function onMouseOverGrid(e) {
//   const dataGridLocation = e.target.getAttribute('data-cell')
//   const cell = document.querySelector(
//     `div.grid-cell[data-cell="${dataGridLocation}"]`
//   )
//   cell.classList.add('color-cell')
// }

// const clearBtn = document.querySelector('button#clear')
// clearBtn.addEventListener('click', onClearBtn)

// function onClearBtn(e) {
//   console.log('clear')
//   let cellNbr = parseInt(prompt('number of cell'))
//   while (gridContainer.firstChild) {
//     gridContainer.removeChild(gridContainer.firstChild)
//   }
//   createGrid(cellNbr)
// }
