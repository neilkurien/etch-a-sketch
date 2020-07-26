
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

createGrid(5);