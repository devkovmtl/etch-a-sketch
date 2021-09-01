let gridContainer = document.querySelector('#grid-container')

let num = 4

for (let row = 0; row < num; row++) {
  let rowContainer = document.createElement('div')
  rowContainer.setAttribute('class', 'grid-row')
  rowContainer.style.height = `calc(10% * ${num})`

  for (let col = 0; col < num; col++) {
    // console.log(gridContainer)
    let div = document.createElement('div')
    div.classList.add('grid-cell')
    div.style.width = `calc(100% / ${num})`
    div.setAttribute('data-cell', `${row}x${col}`)
    // console.log(`GRID CELL : ${row} ${col}`)
    rowContainer.appendChild(div)
  }

  gridContainer.appendChild(rowContainer)
}
