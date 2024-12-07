/**
 * O Bubble Sort (ou ordenação por bolha) é um algoritmo de ordenação 
 * simples que funciona comparando pares de elementos adjacentes em 
 * uma lista e trocando-os de lugar se estiverem fora de ordem. 
 * Isso é repetido até que a lista esteja ordenada.
 */

let vetor = [5, 25, 15, 75, 35]

console.log('\nVetor Original: \n')

console.table(vetor)

let tamanhoVetor = vetor.length

console.log('\nTamanho do Vetor: ', tamanhoVetor)

let troca

do {
	troca = false
	for (let indice = 0; indice < tamanhoVetor - 1; indice++) {
		// Compara a posição atual com a próxima posição
		if (vetor[indice] > vetor[indice + 1]) {
			// Troca os elementos de posição
			let temporario = vetor[indice]
			vetor[indice] = vetor[indice + 1]
			vetor[indice + 1] = temporario

			// Indica que houve a troca
			troca = true
		}
	}
	tamanhoVetor-- // Reduz o número de comparações em cada iteração
} while (troca)


console.log('\nVetor Ordenado: \n')

console.table(vetor)