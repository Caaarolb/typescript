const leia = require('readline-sync');

let numero = leia.questionInt('Digite um numero: ');

// Verificar se o número é par ou ímpar ou pos e neg
let paridade, sinal;

if (numero % 2 === 0) {
    paridade = 'par';
} else {
    paridade = 'ímpar';
}

// Verificar se o número é positivo, negativo ou zero
if (numero > 0) {
    sinal = 'positivo';
} else if (numero < 0) {
    sinal = 'negativo';
} else {
    sinal = 'neutro';
}


if (sinal === 'neutro') {
    console.log(`O número ${numero} é ${paridade} e neutro.`);
} else {
    console.log(`O número ${numero} é ${paridade} e ${sinal}!`);
}