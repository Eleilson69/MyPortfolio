// seletores de navegação
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
// seletores da area de conteudo do card
const conteudo1 = document.querySelector('.conteudo-1');
const conteudo2 = document.querySelector('.conteudo-2');
// seletores de imagens do card 
const imgOne = document.querySelector('.img-1');
const imgTwo = document.querySelector('.img-2');
// seletores do conteudo do relogio
const relogio = document.querySelector('.relogio');
const relAmPm = document.querySelector('.am-pm');
// seletores de icones da redes sociais 
const whatsappIcon = document.querySelector('#whatsapp');
const instagramIcon = document.querySelector('#instagram');
const dot = document.querySelector('.dot');
const dotcard = document.querySelector('.dot-card');
const dotcard2 = document.querySelector('.dot-card-2');


const allLi = document.querySelectorAll('.rds-conteiner');

const amPm = () => {
    const data = new Date();
    const hora = data.getHours();
    if (hora < 12 || hora > 24) {
        relAmPm.innerHTML = 'AM'
    };
    if (hora >= 12 && hora <= 24) {
        relAmPm.innerHTML = 'PM'
    };
};

const horas = () => {
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const hr = hora < 10 ? `0${hora}` : hora;
    const mn = minutos < 10 ? `0${minutos}` : minutos;
    const ss = segundos < 10 ? `0${segundos}` : segundos;
    relogio.innerHTML = `<p>${hr}:${mn}:${ss}</p>`
};

setInterval(() => {
    horas();
    amPm();
}, 1000);

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

const active = () => {
    dot.classList.add('active');
    dotcard.classList.add('active');
    dotcard2.classList.add('active');
}

const desactive = () => {
    dot.classList.remove('active');
    dotcard.classList.remove('active');
    dotcard2.classList.remove('active');
}

allLi.forEach((li, index) => {
    const dotcard2 = document.querySelector('.dot-card-2');
    const dotPai = document.querySelector('.dotPai');

    li.addEventListener('mouseenter', (e) => {
        if(index === 0){
            dotPai.style.transform = `translateX(-15px)`;
            dotcard2.innerHTML = `
            <p>
                Oi! me chama no <strong style="color: rgb(0, 255, 102);">Whatsapp</strong>
                vamos converssar.
            </p>`;
        };
        if(index === 1){
            dotPai.style.transform = `translateX(93.5px)`;
            dotcard2.innerHTML = `
            <p>
                Me segue no 
                <strong style="color: rgb(255, 0, 128);">Instagram</strong>
                e me chama no direct.
            </p>`;
        }
        if(index === 2){
            dotPai.style.transform = `translateX(203px)`;
            dotcard2.innerHTML = `
            <p>
                Passa lá no meu <strong style="color:  rgb(39, 48, 161);">Linkedin</strong>.
            </p>`;
        };
        if(index === 3){
            dotPai.style.transform = `translateX(311px)`;
            dotcard2.innerHTML = `
            <p>
                Dá uma olhadinha lá no meu 
                <strong 
                    style="
                        color: black; 
                        text-shadow:  1px 1px 0px #F7004E, -1px -1px 0px  #00EAE3;
                    ">
                    TikTok
                </strong>.
            </p>
            `;
        };
        if(index === 4){
            dotPai.style.transform = `translateX(420px)`;
            dotcard2.innerHTML = `
            <p>
                Me segue no 
                <strong style="color: rgb(50, 124, 253);">Twitter</strong>
                tó ativo lá também.
            </p>`;
        };
        
    });

});

navLeft.addEventListener('click', () => showContentOne());
navRight.addEventListener('click', () => showContentTwo());
   
