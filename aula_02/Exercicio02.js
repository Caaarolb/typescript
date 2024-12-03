const leia = require('readline-sync');

// Leitura das notas
let nota1 = parseFloat(leia.question("Digite a Nota 1: "));
let nota2 = parseFloat(leia.question("Digite a Nota 2: "));
let nota3 = parseFloat(leia.question("Digite a Nota 3: "));
let nota4 = parseFloat(leia.question("Digite a Nota 4: "));

// Cálculo da média
let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

// Exibição da média final com uma casa decimal
console.log("Média Final:", mediaFinal.toFixed(1));
