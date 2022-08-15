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
        newRow.draggable = false;
        newRow.id = i;
        gridContainer.appendChild(newRow)
    }

    let gridRows = document.querySelectorAll('.gridRow');

    gridRows.forEach((row) => {
        for(i = 0; i<width; i++){
            let box = document.createElement('div');
            box.classList.add('gridBox');
            box.draggable = false
            box.id = i
            row.appendChild(box)
        }
    })
}

createGrid(10)

let gridBoxes = document.querySelectorAll('.gridBox');
let mouseDown = false;
let randomColour = false;

let resetButton = document.querySelector('.resetButton')
let gridSizeButton = document.querySelector('.newGrid')
let colorPicker = document.querySelector('#colorpicker')
let randomColourButton = document.querySelector('.randomColourButton')

document.addEventListener('mousedown', () => {
    mouseDown = true
})

document.addEventListener('mouseup', () => {
    mouseDown = false
})

gridBoxes.forEach((box) => {
    box.addEventListener('mousedown', (event) => {
        console.log('clicked')
        if(randomColour){
            let randRed = Math.floor(Math.random()*255)
            let randGreen = Math.floor(Math.random()*255)
            let randBlue = Math.floor(Math.random()*255)

            event.target.style.backgroundColor = 'rgb('+randRed+', '+randGreen+', '+randBlue+')';
        } else{
            event.target.style.backgroundColor = colorPicker.value;
        }
    })

    box.addEventListener('mouseover', (event) => {
        console.log('hover')
        if(mouseDown === true){
            if(randomColour){
                let randRed = Math.floor(Math.random()*255)
                let randGreen = Math.floor(Math.random()*255)
                let randBlue = Math.floor(Math.random()*255)
    
                event.target.style.backgroundColor = 'rgb('+randRed+', '+randGreen+', '+randBlue+')';
            } else{
                event.target.style.backgroundColor = colorPicker.value;
            }
        }
    })
})

resetButton.addEventListener('click', () =>{
    let resetBoxes = document.querySelectorAll('.gridBox');
    resetBoxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    })
})

randomColourButton.addEventListener('click', () =>{
    if(randomColour === true){
        randomColour = false;
    } else{
        randomColour = true;
    }
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
            event.target.style.backgroundColor = colorPicker.value;
        })
    
        box.addEventListener('mouseover', (event) => {
            console.log('hover')
            if(mouseDown === true){
                event.target.style.backgroundColor = colorPicker.value;
            }
        })
    })
})