// ... rest, ... spread

//arrays
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [primeiroNumero, segundoNumero, ...resto] = numeros;

const [um, , tres, , cinco, , sete] = numeros;


const numeros2 = [ [1, 2, 3], [ 4, 5, 6], [7, 8, 9] ];

const [lista1, lista2, lista3] = numeros2
console.log(lista3[2])

console.log(um, tres, cinco, sete)
console.log(primeiroNumero, segundoNumero)
console.log(resto) 

// objetos

const pessoa = {
    nome: "Guilherme",
    sobrenome: "Santos",
    idade: 28,
    endereco: {
        rua: "Rua Poseidon",
        numero: 02
    }
};
// atribuição via desestruturação

const {nome, sobrenome, endereco: {rua, numero}} = pessoa;

console.log(nome, sobrenome, rua, numero)