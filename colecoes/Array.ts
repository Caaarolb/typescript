import readlinesync = require('readline-sync');

//criamos a coleção Array vazia
const numeros: Array<number> = new Array<number>();

//adicionamos valores na coleção
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7,3);

//listamos os dados que foram adicionados 
for(let numero of numeros) {
    console.log(numero);
}

//adicionamos um numero utilizando a entrada de dados via teclado
numeros.push(readlinesync.questionFloat('Digite um numero: '))

//adicionamos um ou mais elementos no inicio da fila
numeros.unshift(2,4.5,8,9)

console.table(numeros)

// Verificamos de um numero existe na coleção
console.log("\nexiste o numero 5 no array? ", numeros.includes(5));

//Verificamos qual é o indice de um elemento
console.log("\nQual é o indice  do numero 3 no array? ", numeros.indexOf(3));

//Removemos um numero da coleção
numeros.splice(numeros.indexOf(10), 1)

console.table(numeros)