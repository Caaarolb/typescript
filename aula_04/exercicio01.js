const leia = require('readline-sync');

//ler os numeros do teclado
let numero1 = leia.questionInt('Diite o primeiro numero do intervalo ');
let numero2 = leia.questionInt('Digite o ultimo numero do intervalo: ');

if (numero1 >= numero2) {
    console.log('Intervalo invalido');
}else {
    console.log(`No intervalo entre ${numero1} e ${numero2}:` );

for (let i = numero1; i <= numero2; i++) {
    //confirmar se o numero é multiplo de 3 e 5

if(i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} é multiplo de 3 e 5`);
}
}
}
