function relogio() {

    const criaHoraDosSegundos = (segundos) => {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString("pt-BR",{
            hour12:false,
            timeZone: "UTC"
        })
    }
    
    // const relogio = document.querySelector(".relogio");
    // const iniciar = document.querySelector(".iniciar");
    // const pausar = document.querySelector(".pausar");
    // const zerar = document.querySelector(".zerar");
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }
    
    document.addEventListener("click", (e) => {
        const elemento = e.target;
    
        if(elemento.classList.contains("zerar")){
            clearInterval(timer);
            relogio.classList.remove("pausado");
            relogio.innerHTML = "00:00:00";
            segundos = 0;
        }
    
        if(elemento.classList.contains("pausar")){
            clearInterval(timer);
            relogio.classList.add("pausado");
        }
        if(elemento.classList.contains("iniciar")){
            relogio.classList.remove("pausado");
            clearInterval(timer);
            iniciaRelogio();
        }
    })
    
    // iniciar.addEventListener("click", (e) => {
    //    relogio.classList.remove("pausado");
    //    clearInterval(timer);
    //    iniciaRelogio();
    // })
    
    // pausar.addEventListener("click", (e) => {
    //    clearInterval(timer);
    //    relogio.classList.add("pausado");
    // })
    // zerar.addEventListener("click", (e) => {
    //    clearInterval(timer);
    //    relogio.classList.remove("pausado");
    //    relogio.innerHTML = "00:00:00";
    //    segundos = 0;
    // })
}

relogio();