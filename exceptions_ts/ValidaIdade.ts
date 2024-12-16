import readline = require("readline-sync");

let loop: boolean =true;
do{
        try{
        let idade: number = readline.questionInt("Digite a idade: ")
        validarIdade(idade)
        loop= false
} catch(error:any){
        console.error(error.name)
        console.error(error.message)
        console.error('\n Você digitou uma idade menos do que 18 anos')
    
        }
} while (loop)
function validarIdade(idade: number): void {
    if (idade >= 18)
        console.log("A pessoa é maior de idade!")
    else 
        throw new Error("A pessoa é menor de idade!")
}