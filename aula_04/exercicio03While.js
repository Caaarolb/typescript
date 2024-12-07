const leia = require ('readline-sync');

let menoresDe21 = 0;
let maioresDe50 = 0;

let idade = 0;

while (idade >= 0){
    idade = leia.questionInt('Digite uma idade: ');
    
    if (idade < 0){
        break;
    }

    if (idade < 21){
        menoresDe21++;
    } else if (idade > 50){
        maioresDe50++;
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menoresDe21}`);
console.log(`\nTotal de pessoas maiores de 50 anos: ${maioresDe50}`);
