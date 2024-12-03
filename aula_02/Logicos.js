const leia = require('readline-sync')

//Dados Usuario
const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("\nTela de Login")

    let usuarioLogin = leia.question('Digite o seu usuario:')
    let senhaLogin = leia.question('Digite a sua senha: ', {
    hideEchoBack: true,
})

if(usuarioLogin === usuario && senhaLogin === senha) {
    var mensagem = "Seja Bem Vinde! Usuario autenticado com Sucesso!"
} else{
    var mensagem = "Acesso Negado!"

}

console.log(mensagem)

if(!isBlock){
        console.log("Usuário está ativo!")

}else{
    console.log("Usuario está inativo! Contate o administrador")
    process.exit(0)
}

if(isAdmin || isGerente){
    console.log("Acesso ao painel Administrativo Liberado!")
}else{
    console.log("Acesso ao painel Negado")
}