
function createGrid (num) {
    const screen = document.querySelector('.screen');

    for (i=0; i<num; i++) {
        function createRow(num) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('rowContainer');

            for (j=0; j<num; j++) {
                function createCol(num) {
                    const newGridBox = document.createElement('div');
                    newGridBox.classList.add('grid-box');
                    rowContainer.appendChild(newGridBox);
                }
                createCol(num);
            }

            screen.appendChild(rowContainer);

        }
        createRow(num);
    }
}

function fillBG (e) {
    this.classList.add('black'); // on hover, add class="black" to that specific grid-box
}

function clearGrid () {
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(item => item.classList.remove('black'));
}

//Add event listener to every grid-box 
function addBoxEventListeners () {
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(item => item.addEventListener('mouseenter', fillBG));
    boxes.forEach(item => item.addEventListener('touchstart', fillBG));
}

function changeGrid () {
    boxNum = prompt("Enter new grid size");
    deleteGrid();
    createGrid(boxNum);
    addBoxEventListeners();
}

function deleteGrid () {
    let node = document.querySelector('.screen');
    node.innerHTML="";
}

let boxNum = 24; //Default Grid Size
createGrid(boxNum);
addBoxEventListeners();

//Button Event Listeners
document.querySelector('.clear-grid-btn').addEventListener('click', clearGrid);
document.querySelector('.change-grid-btn').addEventListener('click', changeGrid);