
const container = document.getElementById('container')
var cell;
var row = 16;

//Create Grid using CSS grid

function createGrid(row) {
    container.textContent= "";
    container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    let square = row * row;
    for(let i = 0; i < square; i++) {
        cell = document.createElement("div");
        cell.classList.add("content");
        container.appendChild(cell);        
    }
}

// Initial Load
createGrid(row);

const changeSizeBtn = document.querySelector('#change_size');

changeSizeBtn.addEventListener("click", function() {
    changeSize();
});

function changeSize() {
    row = prompt("Enter a number between 1 and 64.");
    createGrid(row);
}

