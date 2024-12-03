const leia = require('readline-sync');

// dados dos colaboradores
let salarioBruto = parseFloat(leia.question("Digite o Salário Bruto: "));
let adicionalNoturno = parseFloat(leia.question("Digite o Adicional Noturno: "));
let horasExtras = parseFloat(leia.question("Digite o número de Horas Extras: "));
let descontos = parseFloat(leia.question("Digite o valor dos Descontos: "));

// Cálculo do salário líquido
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

// Exibição do salário líquido com duas casas decimais
console.log("Salário Líquido:", salarioLiquido.toFixed(2));
