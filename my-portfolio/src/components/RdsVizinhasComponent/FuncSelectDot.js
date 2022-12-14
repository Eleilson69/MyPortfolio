export const FuncSelectDot = () => {
    const allLi = document.querySelectorAll('.rds-conteiner');
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
}