const gridContainer = document.querySelector('.gridContainer');

/* function createGrid(width){
    for(i=0; i < (width**2); i++){
        let box = document.createElement('div');
        box.classList.add('gridBox');
        box.style.width = (Math.floor(99/width))+'%'
        gridContainer.appendChild(box)
    }
} */

function createGrid(width){
    for(i = 0; i<width; i++){
        console.log(i)
        let newRow = document.createElement('div')
        newRow.classList.add('gridRow');
        newRow.id = i;
        gridContainer.appendChild(newRow)
    }

    let gridRows = document.querySelectorAll('.gridRow');

    gridRows.forEach((row) => {
        for(i = 0; i<width; i++){
            let box = document.createElement('div');
            box.classList.add('gridBox');
            box.id = i
            row.appendChild(box)
        }
    })
}

createGrid(10)

let gridBoxes = document.querySelectorAll('.gridBox');
let mouseDown = false;

let resetButton = document.querySelector('.resetButton')
let gridSizeButton = document.querySelector('.newGrid')

document.addEventListener('mousedown', () => {
    mouseDown = true
})

document.addEventListener('mouseup', () => {
    mouseDown = false
})

gridBoxes.forEach((box) => {
    box.addEventListener('mousedown', (event) => {
        console.log('clicked')
        event.target.style.backgroundColor = 'blue';
    })

    box.addEventListener('mouseover', (event) => {
        console.log('hover')
        if(mouseDown === true){
            event.target.style.backgroundColor = 'blue';
        }
    })
})

resetButton.addEventListener('click', () =>{
    let resetBoxes = document.querySelectorAll('.gridBox');
    resetBoxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    })
})

gridSizeButton.addEventListener('click', () =>{
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }

    let size = prompt('Enter grid size: ');

    createGrid(size)
    let newBoxes = document.querySelectorAll('.gridBox');

    newBoxes.forEach((box) => {
        box.addEventListener('mousedown', (event) => {
            console.log('clicked')
            event.target.style.backgroundColor = 'blue';
        })
    
        box.addEventListener('mouseover', (event) => {
            console.log('hover')
            if(mouseDown === true){
                event.target.style.backgroundColor = 'blue';
            }
        })
    })
})