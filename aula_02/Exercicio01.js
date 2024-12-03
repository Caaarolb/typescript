let salario = 10000.00;
const abono = 1000.00;

console.log(
    'Seu novo salario com abono é:',
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(salario + abono)
);