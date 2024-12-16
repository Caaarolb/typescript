
try{
    const resultado = converte('abc');

console.log(resultado);
} catch(error: any){
    if (error instanceof TypeError)
        console.error("\n Você digitou um número ao inés de uma string")
    else
    console.log('Erro inesperado!', error.message)
} finally{
    console.log("\nPrograma finalizado com sucesso!")
}

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}