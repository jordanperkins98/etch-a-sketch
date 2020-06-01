const container = document.querySelector('.container');
const button = document.querySelector('button');
const checkBox = document.querySelector('input');
button.addEventListener('click', resetPage);


//looping through specified griz side making that many rows while populating with the same number of cells
function makeGrid(gridSize){
    container.style.setProperty('--numRows', gridSize);
    container.style.setProperty('--numCols', gridSize);
    for(let i = 0; i < gridSize; i++){
        makeCols(gridSize);
    }
}

function makeCols(numOfCols){
    for(let i = 0; i < numOfCols; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', draw);
        container.appendChild(div);
    }
}



function draw(){
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256)
    this.style.setProperty('background-color', `rgb(${R},${G},${B})`);
}

function resetPage(){
    container.querySelectorAll('.cell').forEach(cell => cell.remove());
    promptUser();
    
}


function promptUser(){
    gridSize = prompt("Choose a grid size between 4-64");
    while(isNaN(gridSize) || gridSize > 64 || gridSize < 4){
        gridSize = prompt("Invalid! Please select a size between 4-64")        
    }
    makeGrid(gridSize);
}


promptUser();