let gridSize = 50
// INPUT RANGE SLIDER THE SLIDER AND VALUE
const rangeGridSize = document.querySelector('#range-grid-size')
const rangeGridValue = document.querySelector('.range-slider__value')

rangeGridSize.onchange = function (e) {
  gridSize = parseInt(e.target.value)
  rangeGridValue.textContent = gridSize
}

// let gridContainer = document.querySelector('#grid-container')

// let num = 100

// function createGrid(num) {
//   for (let row = 0; row < num; row++) {
//     let rowContainer = document.createElement('div')
//     rowContainer.setAttribute('class', 'grid-row')
//     rowContainer.style.height = `calc(10% * ${num})`

//     for (let col = 0; col < num; col++) {
//       // console.log(gridContainer)
//       let div = document.createElement('div')
//       div.classList.add('grid-cell')
//       div.style.width = `calc(100% / ${num})`
//       div.setAttribute('data-cell', `${row}x${col}`)
//       // console.log(`GRID CELL : ${row} ${col}`)
//       rowContainer.appendChild(div)
//     }

//     gridContainer.appendChild(rowContainer)
//   }

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

// createGrid(48)
