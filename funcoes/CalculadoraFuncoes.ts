import readlinesync = require('readline-sync');
import { colors } from '../util/Cores';


let n1: number
let n2: number
let opcao: number

do {

    menu()
    opcao = readlinesync.questionInt()

    switch(opcao){
        case 1:
            [n1, n2] = obterNumeros()
            console.log(`\n${n1} + ${n2} = ${soma(n1, n2)}`)
            break
        case 2:
            [n1, n2] = obterNumeros()
            console.log(`\n${n1} - ${n2} = ${subtracao(n1, n2)}`)
            break
        case 3:
            [n1, n2] = obterNumeros()
            console.log(`\n${n1} * ${n2} = ${multiplicacao(n1, n2)}`)
            break
        case 4:
            [n1, n2] = obterNumeros()
            let resultado = divisao(n1, n2)
            if(resultado === null){
                console.log("\nDivisao por zero! Nao eh  possivel realizar a operacao")
            } else {
                console.log(`\n${n1} / ${n2} = ${resultado}`)
            }
            break
        case 0:
            about()
            break
        default:
            console.log("\nOpcao invalida!")
            break 
    }

} while (true)

function menu(): void {
    console.log(colors.fg.cyan, "\n","-".repeat(25) ,"Calculadora", "-".repeat(25), "\n")
    console.log("   1 - Soma")
    console.log("   2 - Subtracao")
    console.log("   3 - Multiplicacao")
    console.log("   4 - Divisao")
    console.log("   0 - Sair")

    console.log("\n","-".repeat(65) ,"\n")
    console.log("Digite a opcao desejada: ", colors.reset)  // Como não posso utilizar o prompt() diretamente, utilizei readlinesync.questionInt() para pegar a opcao do usuario.
}

function obterNumeros(): [number, number] {
    n1 = readlinesync.questionFloat("\nDigite o primeiro numero: ")
    n2 = readlinesync.questionFloat("Digite o segundo numero: ")
    return [n1, n2]
}

function soma(n1: number, n2: number): number {
    return n1 + n2
}

function subtracao(n1: number, n2: number): number {
    return n1 - n2
}

function multiplicacao(n1: number, n2: number): number {
    return n1 * n2
}

function divisao(n1: number, n2: number): number | null{
    let divisao = n1 / n2
    return(divisao !== Infinity ? divisao : null)
}

function about() {
    console.log("\nDesenvolvido por: Jeisa")
    console.log("\nPrograma encerrado!")
    process.exit(0)
}