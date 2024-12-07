const leia = require('readline-sync'); 

let vetor = new Array(10); 
let elementosIndicesImpares = new Array(10); 
let elementosPares = new Array(10); 
let posicaoImpares = 0; 
let posicaoPares = 0; 
let soma = 0; 


for (let i = 0; i < vetor.length; i++) {
    vetor[i] = leia.questionInt(`Digite o numero para a posicao ${i + 1}: `);
}


for (let i = 1; i < vetor.length; i += 2) { 
    elementosIndicesImpares[posicaoImpares] = vetor[i];
    posicaoImpares++; 
}


for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) { 
        elementosPares[posicaoPares] = vetor[i];
        posicaoPares++; 
    }
}


for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}
let media = soma / vetor.length;


console.log("\nElementos nos índices ímpares:");
for (let i = 0; i < posicaoImpares; i++) { 
    console.log(elementosIndicesImpares[i]);
}

console.log("\nElementos pares:");
for (let i = 0; i < posicaoPares; i++) { 
    console.log(elementosPares[i]);
}

console.log("\nSoma de todos os elementos:", soma);
console.log("Média de todos os elementos:", media.toFixed(2));
