export const WatchComponent = () => {
    const relogio = document.querySelector('.watch')
    // const amPm = () => {
    //     const data = new Date();
    //     const hora = data.getHours();
    //     if (hora < 12 || hora > 24) {
    //         relAmPm.innerHTML = 'AM'
    //     };
    //     if (hora >= 12 && hora <= 24) {
    //         relAmPm.innerHTML = 'PM'
    //     };
    // };
    
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
        // amPm();
    }, 1000);
}


