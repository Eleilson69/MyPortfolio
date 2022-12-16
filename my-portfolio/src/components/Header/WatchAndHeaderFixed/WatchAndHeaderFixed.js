export const WatchComponent = () => {
    const watch = document.querySelector('.watch');
    
    const horas = () => {
        const data = new Date();
        const hora = data.getHours();
        const minutos = data.getMinutes();
        const segundos = data.getSeconds();
        const hr = hora < 10 ? `0${hora}` : hora;
        const mn = minutos < 10 ? `0${minutos}` : minutos;
        const ss = segundos < 10 ? `0${segundos}` : segundos;
        watch.innerHTML = `<p>${hr}:${mn}:${ss}</p>`
    };
    return horas();
}

export const renderAmPm = () => {
    const relAmPm = document.querySelector('.am-pm');
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
    return amPm();
}

const handleScrollToPageBottom = () => {
    const header = document.querySelector('.header');
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

export const HeaderFixed = () => {
   return window.addEventListener('scroll', () => handleScrollToPageBottom())
};
