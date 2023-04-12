function chooseGrid() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('grid-8')) {
                generateGrid(8 * 8, 'grid-8x8');
            } else if (button.classList.contains('grid-16')) {
                generateGrid(16 * 16, 'grid-16x16');
            } else if (button.classList.contains('grid-24')) {
                generateGrid(24 * 24, 'grid-24x24');
            }
        });
    });
}

function generateGrid(divNum = 16 * 16, className = 'grid-16x16') {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = "";
    for (let i = 0; i < divNum; i++) {
        const divSquare = document.createElement('div');
        gridContainer.classList.remove('grid-8x8', 'grid-16x16', 'grid-24x24');
        divSquare.classList.add(className);
        gridContainer.appendChild(divSquare);
        colorGrid(className);
    }
}

function colorGrid(className) {
    const colorDivs = document.getElementsByClassName(className);
    for(let i=0; i<colorDivs.length; i++) {
        colorDivs[i].addEventListener('mouseenter', () => {
            colorDivs[i].style.backgroundColor = "black";
        });
    }
}

chooseGrid();
generateGrid();