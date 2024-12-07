const leia = require('readline-sync')

// Linhas da matriz
let matrizInteiros = new Array(2);

// Divide as linhas com colunas 
for (let indice = 0; indice < matrizInteiros.length; indice++) {
    matrizInteiros[indice] = new Array(3);
}

// Preenche a matriz com valores
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
        matrizInteiros[indiceLinha] [indiceColuna] = leia.questionInt("Digite um numero: ");
    }
} 

console.table(matrizInteiros)