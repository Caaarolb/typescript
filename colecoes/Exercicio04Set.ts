
import * as readlineSync from "readline-sync";

const setNumeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);


const numeroProcurado = Number(readlineSync.question("Digite o número que você deseja encontrar: "));

if (setNumeros.has(numeroProcurado)) {
    console.log(`O número ${numeroProcurado} foi encontrado!`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado!`);
}
