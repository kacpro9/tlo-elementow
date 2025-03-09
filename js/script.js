const setBackground = () => {
    let paragraph1 = document.querySelector('.firstParagraph');
    let paragraph2 = document.querySelector('.secondParagraph');

    paragraph1.classList.add('background-red');
    paragraph2.classList.add('background-yellow');
}

let buttonBackground = document.getElementById('set-color');

buttonBackground.addEventListener('click', setBackground);