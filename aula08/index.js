const nome = 'Guilherme';
const sobrenome = 'Santos';
const idade = 28;
const peso = 76;
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso/(altura *altura);
anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu imc é', imc);
console.log(nome, 'nasceu em', anoNascimento); 