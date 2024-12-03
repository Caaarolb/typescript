const leia = require('readline-sync')

let n1, n2;

n1 = leia.questionInt("Digite o primeiro numero: ")
n2 = leia.questionInt("Digite o segundo numero: ")

console.log("A variável N1 possui o valor:", n1)
console.log("A variável N2 possui o valor:", n2)

// soma = n1 + n2

console.log ("A soma de n1 + n2 é igual a :", n1 + n2)
console.log ("A subtração de n1 - n2 é igual a :", n1 - n2)
console.log ("A multiplicação de n1 * n2 é igual a :", n1 * n2)
console.log ("A Divisão de n1 / n2 é igual a :", n1 / n2)
