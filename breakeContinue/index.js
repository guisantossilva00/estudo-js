const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// continue - Continua para próxima iteração
// Break - Sai do laço de repetição

// ele podem ser usados em todos os for, while e do while

for (let numero of numeros){

    if (numero === 2) {
        console.log ("Pulei o número 2");
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log("O numero 7 foi encontrado, saindo...");
        break;
    }
}