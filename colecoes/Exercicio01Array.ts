import readlineSync = require('readline-sync');

const cores: Array<string> = [];

for (let i = 0; i < 5; i++) {
    const cor = readlineSync.question(`Digite a cor ${i + 1}: `); // Solicita a cor ao usuário
    cores.push(cor);

}
    console.log("\nListar todas as cores:");
for (const cor of cores) {
    console.log(cor);
}

const coresOrdenadas = [...cores].sort();

console.log("\nOrdenar as cores:");
for (const cor of coresOrdenadas) {
    console.log(cor);
}