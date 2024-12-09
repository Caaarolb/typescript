import readlineSync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();

let opcao: number;

do {
    console.log("\n*******************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("*******************************");

    opcao = parseInt(readlineSync.question("Entre com a opcao desejada: "));

    switch (opcao) {
        case 1:
            const nome = readlineSync.question("Digite o nome do cliente: ");
            fila.enqueue(nome);
            console.log(`${nome} foi adicionado à fila.`);
            break;
        case 2:
            fila.printQueue();
            break;
        case 3:
            const cliente = fila.dequeue();
            if (cliente) {
                console.log(`Cliente chamado: ${cliente}`);
            }
            break;
        case 0:
            console.log("Encerrando o programa...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);
