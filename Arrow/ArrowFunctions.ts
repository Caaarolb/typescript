let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros){
    console.log(numero)
}

//Arrow functions

numeros.forEach(numero => console.log(numero))

//Numero elevado ao quadrado

numeros.forEach(numero => console.log(numero * numero))

//Listar somente os numeros pares

numeros.forEach(numero => {
    if(numero % 2 === 0)
        console.log(numero)
})