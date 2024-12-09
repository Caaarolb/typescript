import readlinesync = require('readline-sync');

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat(  'Digite o primeiro numero: ' );

numero2 = readlinesync.questionFloat(  'Digite o segundo numero: ' );

console.log("A soma dos 2 números é igual a ", numero1 + numero2)
console.log("A subtração dos 2 números é igual a ", numero1 - numero2)
console.log("A multiplicação dos 2 números é igual a ", numero1 * numero2)
console.log("A divisão dos 2 números é igual a ", numero1 / numero2)