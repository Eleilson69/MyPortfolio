const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

const conteudo1 = document.querySelector('.conteudo-1');
const conteudo2 = document.querySelector('.conteudo-2');

const imgOne = document.querySelector('.img-1');
const imgTwo = document.querySelector('.img-2');

const showContentOne = () => {
    navLeft.classList.add('background-on');
    navRight.classList.remove('background-on');
    conteudo1.classList.add('opacity-on');
    conteudo2.classList.remove('opacity-on');
    imgOne.classList.remove('animateRotate');
    imgTwo.classList.add('animateRotate');
};

const showContentTwo = () => {
    navRight.classList.add('background-on');
    navLeft.classList.remove('background-on');
    conteudo2.classList.add('opacity-on');
    conteudo1.classList.remove('opacity-on');
    imgOne.classList.add('animateRotate');
    imgTwo.classList.remove('animateRotate');
};

navLeft.addEventListener('click', () => showContentOne());
navRight.addEventListener('click', () => showContentTwo());
   
