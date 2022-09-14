let vetorA = [1, 2, 3, 4, 5]
vetorB.forEach((elemento, posicao) =>{
    if (posicao % 2 == 1){
        if(elemento % 2 ==0){
            console.log(`Posição ${posicao}: Valor do elemento = ${elemento} `)
        }
    }  
})

// função map
let vetor = [2, 4, 6, 8, 9] // inicia o vetor
vetor = vetor.map((elemento) => { // captura o vetor criando um novo
    return (elemento * 2) // multiplica o elemento do vetor por 2
})
console.log(vetor)

//função reduce 
let vetor = [10, 20, 30, 40, 50] // inicia o vetor
let soma = vetor.reduce((total, elemento) => { // captura o vetor criando um novo usando reduce
    return total + elemento // soma o total + elementos 
})  
console.log(soma)