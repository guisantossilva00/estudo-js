// Escreva uma função que recebe 2 números e retorne o maior deles

// Fiz essa opção

function retornaMaior(a, b) {
    if( a > b) {
        return a;
    } else {
        return b;
    }
}

const resultado = retornaMaior(8, 5);

console.log(resultado);

// // Melhorias do código

// // opção 1

// function retornaMaior(a, b) {
//     if( a > b) {
//         return a;
//     }
//         return b;
// }

// // opção 2

// function retornaMaior(a, b) {
//     if( a > b) return a;
//     return b;
// }

// // opção 3

// function retornaMaior(a, b) {
//     return a > b ? a : b
// }

// // opção 4

// const retornaMaior2 = (a, b) => {
//     return a > b ? a : b;
// }

// // opção 5

// const retornaMaior2 = (a, b) => a > b ? a : b;

// console.log(retornaMaior2(100, 20));

