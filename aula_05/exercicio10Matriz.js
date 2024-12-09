const leia = require('readline-sync');


let matrizNotas = new Array(10); 

for (let i = 0; i < matrizNotas.length; i++) {
    matrizNotas[i] = new Array(4); 
}


for (let participante = 0; participante < matrizNotas.length; participante++) {
    console.log(`Digite as notas do participante ${participante + 1}:`);
    for (let bimestre = 0; bimestre < matrizNotas[participante].length; bimestre++) {
        matrizNotas[participante][bimestre] = leia.questionFloat(
            `Nota do bimestre ${bimestre + 1}: `
        );
    }
}


let vetorMedias = new Array(10); 


for (let participante = 0; participante < matrizNotas.length; participante++) {
    let soma = 0;
    for (let bimestre = 0; bimestre < matrizNotas[participante].length; bimestre++) {
        soma += matrizNotas[participante][bimestre]; 
    }
    vetorMedias[participante] = soma / 4; 
}


console.log("\nMatriz de notas dos participantes:");
console.table(matrizNotas);


console.log("\nMédias dos participantes:");
let linhaMedias = ""; 
for (let i = 0; i < vetorMedias.length; i++) {
    if (i === vetorMedias.length - 1) {
        
        linhaMedias += vetorMedias[i].toFixed(1);
    } else {
        linhaMedias += vetorMedias[i].toFixed(1) + " "; 
    }
}
console.table(linhaMedias); 
