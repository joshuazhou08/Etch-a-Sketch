//Create the grid with nested loops
const container = document.querySelector(".container")

function createGrid(rows, columns){
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++) {
            const grid = document.createElement('div');
            const generateRandomColor = () => {
                const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                grid.style.backgroundColor = randomColor
            };
            grid.setAttribute('class', 'pixel')
            grid.style.backgroundColor = 'white'
            grid.addEventListener('mouseenter', generateRandomColor)
            container.appendChild(grid)
        }
    }
}
createGrid(16, 16)