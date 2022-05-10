

const elementos = [
    {
        tag: "p",
        texto: "Frase 1"
    },
    {
        tag: "div",
        texto: "Frase 2"
    },
    {
        tag: "footer",
        texto: "Frase 3"
    },
    {
        tag: "section",
        texto: "Frase 4"
    },
];

const elementoPai = document.querySelector(".container")
const divNova = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const tagNova = document.createElement(tag);
    const textoNovo = document.createTextNode(texto)
    tagNova.appendChild(textoNovo)
    divNova.appendChild(tagNova)
}

elementoPai.appendChild(divNova)