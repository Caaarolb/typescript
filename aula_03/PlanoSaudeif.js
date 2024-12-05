const leia = require('readline-sync');

let nome = leia.question('Digite o seu nome: ');
let idade = leia.question('Qual a sua idade? ');
let valor;


console.log(`\nOlá, seja bem vindo(a) ${nome}!`);


if(idade <= 0){
    console.log('Idade inválida!');
    process.exit(0);
}else if (idade >= 0 && idade <= 10) {
    valor = 100.00;
}else if(idade > 11 && idade <= 29) {
    valor = 200.00;
}else if(idade > 29 && idade <= 45) {
    valor = 300.00;
}else if(idade > 45 && idade <= 59) {
    valor = 500.00;
}else if(idade > 59 && idade <= 65) {
    valor = 600.00;
}else {
    valor = 1000.00;
}

console.log(`\nVocê pagará R$ ${valor.toFixed(2)} reais por ano.`);