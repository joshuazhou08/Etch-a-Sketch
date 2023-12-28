//Create the grid with nested loops
const container = document.querySelector(".container");

function createGrid(rows = 16, columns = 16){
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++) {
            const grid = document.createElement('div');
            const generateRandomColor = () => {
                const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);;
                grid.style.backgroundColor = randomColor;
            };
            grid.setAttribute('class', 'pixel')
            grid.style.backgroundColor = 'white';
            grid.addEventListener('mouseenter', generateRandomColor);
            let sizeInPixels = 480/rows;
            grid.style.height = `${sizeInPixels}px`;
            grid.style.width = `${sizeInPixels}px`;
            container.appendChild(grid);
        }
    }
}

function createGridOffUserInput(){
    const width = prompt("How many pixels wide do you want your canvas to be? Pick a number between 1 and 100.");
    const oldCanvas = document.querySelectorAll('.pixel');
    oldCanvas.forEach((element) => element.remove())
    createGrid(width, width);
}
createGrid()

const button = document.querySelector('button')
button.addEventListener('click', createGridOffUserInput)
