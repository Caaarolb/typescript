const leia = require('readline-sync');

let n1 = parseFloat(leia.question ("Digite o primeiro numero:"))
let n2 = parseFloat(leia.question ("Digite o segundo numero:"))
let n3 = parseFloat(leia.question ("Digite o segundo numero:"))
let n4 = parseFloat(leia.question ("Digite o segundo numero:"))

let diferenca = (n1 * n2) - (n3 * n4)


console.log("A diferença entre os numeros é: ", diferenca)

