const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const divSquare = document.createElement('div');
    divSquare.classList.add('color');
    container.appendChild(divSquare);   
}

const colorDivs = document.getElementsByClassName('color');
for(let i=0; i<colorDivs.length; i++) {
    colorDivs[i].addEventListener('mouseleave', () => {
        colorDivs[i].style.backgroundColor = "black";
    });
}