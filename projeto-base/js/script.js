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
const dotcard2 = document.querySelector('.dot-card-two');




const handleScrollToPageBottom = () => {
const header = document.querySelector('header');
    const { scrollTop } = document.documentElement;
    if (!scrollTop) {
        header.style.boxShadow = '0px 0px 0px black'
        header.style.background = ''
        header.style.transition = '0.3s ease-in-out'
        return
    }
    header.style.boxShadow = '0px 0px 10px black'
    header.style.background = '#130725'
    header.style.transition = '0.3s ease-in-out'
};

window.addEventListener('scroll', () => handleScrollToPageBottom())

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
    const dotcard2 = document.querySelector('.dot-card-two');
    const dotPai = document.querySelector('.dotPai');

    li.addEventListener('mouseenter', (e) => {
        switch(index){
            case 0 :
                dotPai.style.transform = `translateX(0px)`;
                dotcard2.innerHTML = `
                <p>
                    Oi! me chama no <strong style="color: rgb(0, 255, 102);">Whatsapp</strong>
                    vamos converssar
                </p>`;
            break   
            case 1 :
                dotPai.style.transform = `translateX(120px)`;
                dotcard2.innerHTML = `
                <p>
                    Me segue no 
                    <strong style="color: rgb(255, 0, 128);">Instagram</strong>
                    e me chama no Direct
                </p>`;
            break   
            case 2 :
                dotPai.style.transform = `translateX(240px)`;
                dotcard2.innerHTML = `
                <p>
                    Passa lá no meu <strong style="color:  rgb(39, 48, 161);">Linkedin</strong>
                </p>`;
            break   
            case 3 :
                dotPai.style.transform = `translateX(360px)`;
                dotcard2.innerHTML = `
                <p>
                    Dá uma olhadinha lá no meu 
                    <strong 
                        style="
                            color: black; 
                            text-shadow:  1px 1px 0px #F7004E, -1px -1px 0px  #00EAE3;
                        ">
                        TikTok
                    </strong>
                </p>`;
            break    
            case 4 :
                dotPai.style.transform = `translateX(480px)`;
                dotcard2.innerHTML = `
                <p>
                    Me segue no 
                    <strong style="color: rgb(50, 124, 253);">Twitter</strong>
                    tó ativo lá também
                </p>`;
            break    
        }  
    });
});

let canvas, ctx, w, h, meteors = [];

function init() {
    canvas = document.querySelector('.canvas');
    ctx = canvas.getContext('2d');
    resizeReset();
    for(let b = 0; b < 2; b++) {
        meteors.push(new Meteor());
    }
    animationLoop();
}

function resizeReset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

function animationLoop() {
    ctx.clearRect(0, 0, w, h);
    drawScene();
    requestAnimationFrame(animationLoop);
}

function drawScene() {
    meteors.map((meteor) => {
      meteor.update();
      meteor.draw();
    });
}

class Meteor {
    constructor() {
        this.x = 150;
        this.y = 150;
        this.size = 1000;
        this.reset();
    }
    reset() {
      this.x = Math.random() * w + 300;
      this.y = -100;
      this.size = Math.random() * 2 + 0.5;
      this.speed = (Math.random() + 0.5) * 8;
    }
    draw() {
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, .1)";
      ctx.lineCap = "round";
      ctx.shadowColor = "rgb(0, 230, 250)";
      ctx.shadowBlur = 8;
      for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.moveTo(this.x , this.y);
          ctx.lineWidth = this.size;
          ctx.lineTo(this.x + 10 * (i + 1), this.y - 10 * (i + 1));
          ctx.closePath();
          ctx.stroke();
        }
      ctx.restore();
    }
    update() {
      this.x -= this.speed;
      this.y += this.speed;
      if (this.y >= h + 100) {
        this.reset();
      }
    }
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);

navLeft.addEventListener('click', () => showContentOne());
navRight.addEventListener('click', () => showContentTwo());
   
