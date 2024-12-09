const leia = require('readline-sync');

let totalPares = 0
let totalImpares =0;

//lendo 10 numeros via teclado
for (let i = 1; i <= 10; i++){

    let numero = leia.questionInt(`Digite o ${i} numero: `);

    if(numero % 2 === 0){
        totalPares++;
    }else {
        totalImpares++;
    }
}

//Conferindo intervalos de pares e impares
console.log(`\nTotal de números pares: ${totalPares}`);
console.log(`Total de números impares: ${totalImpares}`);
