// For in -> lê os incides ou chaves do objeto
const frutas = ["maçã", "uva", "pera", "banana"];

for (let index in frutas){
    console.log(frutas[index]);
}

const pessoa = {
    nome: "Guilherme",
    sobrenome: "Santos",
    idade: 30
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}