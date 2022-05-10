const data = new Date();
const diaSemana = data.getDay();
const diaCompleto = formataDiaSemana(diaSemana);

const mes = data.getMonth();
const mesFormatado = formataMes(mes);
const dataBrasil = formataData(data);

const dia = zeroAEsquerda(data.getDate());
const ano = zeroAEsquerda(data.getFullYear());

const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());
const horaCompleta = `${hora}:${min}:${seg}`


function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function formataMes(mes){
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = "janeiro"
            break;
        case 1:
            mesTexto = "fevereiro";
            return mesTexto;
        case 2:
            mesTexto = "março";
            return mesTexto;
        case 3:
            mesTexto = "abril";
            return mesTexto;
        case 4:
            mesTexto = "maio";
            return mesTexto;
        case 5:
            mesTexto = "junho";
            return mesTexto;
        case 6:
            mesTexto = "julho";
            return mesTexto;
        case 7:
            mesTexto = "agosto";
            return mesTexto;
        case 8:
            mesTexto = "setembro";
            return mesTexto;
        case 9:
            mesTexto = "outubro";
            return mesTexto;
        case 10:
            mesTexto = "novembro";
            return mesTexto;
        case 11:
            mesTexto = "dezembro";
            return mesTexto;
        default:
            mesTexto = "mês não encontrado"
            return mesTexto;
    }
}

function formataDiaSemana(dia){
    let diaSemanaTexto;

    switch (dia) {
        case 0:
            diaSemanaTexto = "Domingo"
            break;
        case 1:
            diaSemanaTexto = "Segunda-feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "Dia não encontrado"
            return diaSemanaTexto;
    }
}

const h1 = document.querySelector("h1");
h1.innerHTML = `${diaCompleto}, ${dia} de ${mesFormatado} de ${ano} ${horaCompleta}`

console.log(`${diaCompleto}, ${dia} de ${mesFormatado} de ${ano} ${horaCompleta}`)

/* Segunda Opção */

// const h2 = document.querySelector(".container h2");
// const data = new Date();
// const opcoes = {dateStyle: "full", timeStyle: "short"}
// h2.innerHTML = data.toLocaleDateString  ("pt-BR", opcoes);

/* terceira Opção */

function getDiaSemanaTexto(diaSemana){
    const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    return diasSemana[diaSemana];
}

function getNomesMes(numeroMes){
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return meses[numeroMes]
}