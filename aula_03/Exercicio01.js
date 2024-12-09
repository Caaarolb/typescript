const leia = require('readline-sync')

//Pedindo as informações ao usuario
let numeroA = leia.questionInt('Digite o valor de A ');
let numeroB = leia.questionInt('Digite o valor de B ');
let numeroC = leia.questionInt('Digite o valor de C ');

let soma = numeroA + numeroB;

console.log(`\nA soma de A + B = ${numeroA} + ${numeroB} = ${soma}`);


if(soma > numeroC){
    console.log('A Soma de A + B é Maior do que C');
}else if (soma < numeroC){
    console.log('A Soma de A + B é menor do que C');
}else{
    console.log('A Soma de A + B é igual a C');
}
