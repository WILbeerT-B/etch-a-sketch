const container = document.querySelector('.container');


for (let i = 0; i < 256; i++) {
    const divSquare = document.createElement('div');
    divSquare.textContent = "BOX";
    container.appendChild(divSquare);
}
