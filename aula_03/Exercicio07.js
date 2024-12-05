const leia = require('readline-sync');

// Entrada de dados
let numero1 = leia.questionFloat('Digite o primeiro numero: ');
let numero2 = leia.questionFloat('Digite o segundo numero: ');
let codigoOperacao = leia.questionInt('Digite o codigo da operacao (1-Soma, 2-Subtracao, 3-Multiplicacao, 4-Divisao): ');

// Processamento e Saída
let resultado;

switch (codigoOperacao) {
    case 1: 
        resultado = numero1 + numero2;
        console.log(`\n${numero1} + ${numero2} = ${resultado}`);
        break;
    case 2: 
        resultado = numero1 - numero2;
        console.log(`\n${numero1} - ${numero2} = ${resultado}`);
        break;
    case 3: 
        resultado = numero1 * numero2;
        console.log(`\n${numero1} * ${numero2} = ${resultado}`);
        break;
    case 4: 
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log(`\n${numero1} / ${numero2} = ${resultado}`);
        } else {
            console.log('\nDivisão por zero não é permitida!');
        }
        break;
    default: 
        console.log('\nOperação Inválida!');
}
