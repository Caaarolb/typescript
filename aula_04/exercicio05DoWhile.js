const leia= require('readline-sync');

let total = 0;
let numero;

do{
    numero = leia.questionInt('Digite um numero: ');

    if (numero > 0){
        total += numero;
    }
} while (numero !== 0);

console.log(`A soma dos números positivos é: ${total}`);

