export const FuncAction1 = () => {
    const imgCassete = document.querySelector('.imgCassete');
    const imgHeart = document.querySelector('.imgHeart');
    const artigo1 = document.querySelector('#artigo-1');
    const artigo2 = document.querySelector('#artigo-2');
    const elem1 = document.querySelector('.navAction-left');
    const elem2 = document.querySelector('.navAction-right');
    elem1.classList.add('backgroundOn');
    elem2.classList.remove('backgroundOn');
    artigo1.classList.add('artigoDisplayOn');
    artigo2.classList.remove('artigoDisplayOn');
    imgCassete.classList.remove('animateRotate');
    imgHeart.classList.add('animateRotate');
}

export const FuncAction2 = () => {
    const imgCassete = document.querySelector('.imgCassete');
    const imgHeart = document.querySelector('.imgHeart');
    const artigo1 = document.querySelector('#artigo-1');
    const artigo2 = document.querySelector('#artigo-2');
    const elem1 = document.querySelector('.navAction-left');
    const elem2 = document.querySelector('.navAction-right');
    elem1.classList.remove('backgroundOn');
    elem2.classList.add('backgroundOn');
    artigo1.classList.remove('artigoDisplayOn');
    artigo2.classList.add('artigoDisplayOn');
    imgCassete.classList.add('animateRotate');
    imgHeart.classList.remove('animateRotate');
}