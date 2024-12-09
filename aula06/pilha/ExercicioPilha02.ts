import readlineSync = require('readline-sync');
import { Stack } from './Stack';

const pilha = new Stack<string>();

let opcao: number;

do {
    console.log("\n*******************************");
    console.log("1 - Adicionar Livro na Pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da Pilha");
    console.log("0 - Sair");
    console.log("*******************************");

    opcao = parseInt(readlineSync.question("Entre com a opcao desejada: "));

    switch (opcao) {
        case 1:
            const livro = readlineSync.question("Digite o nome do livro: ");
            pilha.push(livro);
            console.log(`${livro} adicionado! `);
            break;
        case 2:
            pilha.printStack();
            break;
        case 3:
            const livroRetirado = pilha.pop();
            if (livroRetirado) {
                console.log(`Livro retirado: ${livroRetirado}`);
            }
            break;
        case 0:
            console.log("Encerrando o programa...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);
