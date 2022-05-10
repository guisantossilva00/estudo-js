// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si ( iteráveis, arrays ou strings)

const carros = ["Sandero", "Celta", "Corsa", "Uno"];

for (let i =0; i < carros.length; i++) {
    console.log(carros[i]);
}

console.log("-------");

for(let i in carros){
    console.log(carros[i]);
}

console.log("-------");

for (let valor of carros) {
    console.log(valor)
}

console.log("-------");

carros.forEach((valor, indice, array) => {
    console.log(valor, indice, array);
})