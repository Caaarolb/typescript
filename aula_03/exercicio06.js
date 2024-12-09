const leia = require('readline-sync');

// Entrada de dados
let nomeColaborador = leia.question('Digite o nome do colaborador: ');
let codigoCargo = leia.questionInt('Digite o codigo do cargo (1 a 6): ');
let salarioAtual = leia.questionFloat('Digite o salario atual do colaborador: ');

// Processamento
let cargo = '';
let percentualReajuste = 0;

// cargo e percentual de reajuste 
switch (codigoCargo) {
    case 1:
        cargo = 'Gerente';
        percentualReajuste = 10;
        break;
    case 2:
        cargo = 'Vendedor';
        percentualReajuste = 7;
        break;
    case 3:
        cargo = 'Supervisor';
        percentualReajuste = 9;
        break;
    case 4:
        cargo = 'Motorista';
        percentualReajuste = 6;
        break;
    case 5:
        cargo = 'Estoquista';
        percentualReajuste = 5;
        break;
    case 6:
        cargo = 'Técnico de TI';
        percentualReajuste = 8;
        break;
    default:
        console.log('Código de cargo inválido!');
        process.exit(0); 
}

// Cálculo do novo salário
let novoSalario = salarioAtual + (percentualReajuste / 100) * salarioAtual;

// Saída de dados
console.log(`\nNome do colaborador: ${nomeColaborador}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário reajustado: R$ ${novoSalario.toFixed(2)}`);
