

window.addEventListener('load', () => {
    let changeGridSize = document.querySelector('#change-grid-size');
    generateSketchArea(changeGridSize.value);
});

let changeGridSize = document.querySelector('#change-grid-size');

changeGridSize.addEventListener('change', (ev) => {
    generateSketchArea(ev.target.value);
});

function generateSketchArea(gridSize) {
    let sketchArea = document.querySelector('#sketch-area');
    let height = sketchArea.offsetHeight / gridSize;
    let width = sketchArea.offsetWidth / gridSize;
    let gridSizeText = document.querySelector('#grid-size');
    let favcolor = document.querySelector('#favcolor');

    sketchArea.innerHTML = '';
    gridSizeText.textContent = gridSize;

    for (let i = 1; i <= gridSize; ++i) {
        let row = document.createElement('div');
        row.setAttribute('class', 'grid-row');
        row.style.border = '1px solid red';
        row.style.cssText = 'display: flex;';
        sketchArea.appendChild(row);
        for (let j = 1; j <= gridSize; ++j) {
            let column = document.createElement('div');
            column.setAttribute('class', 'grid-cell');
            column.style.width = width + 'px';
            column.style.height = height + 'px';
            column.style.borderRadius = '1%';
            row.appendChild(column);
        }
    }

    let gridCells = document.getElementsByClassName('grid-cell');
    Array.from(gridCells).forEach(gridCell => {
            gridCell.addEventListener('mouseover', (ev) => {
            ev.target.style.background = favcolor.value;   
        });
    });
}

let clearGrid = document.querySelector('#clear-grid');

clearGrid.addEventListener('click', () => {
    let gridCells = document.getElementsByClassName('grid-cell');

    Array.from(gridCells).forEach(gridCell => {
            gridCell.style.background = 'white';   
    });
});