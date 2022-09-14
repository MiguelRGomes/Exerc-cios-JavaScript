// função anônina é aquela que não tem nome
let vetor = [1, 2, 3, 4, 5]
vetor.forEach((elemento) => {
    console.log(`Valor do elemento ${elemento}`)
})

let vetorA = [1, 2, 3, 4, 5]
vetorA.forEach((elemento, posicao) =>{
    if (posicao % 2 == 1){
        if(elemento % 2 == 0){
            console.log(`Posição ${posicao}: Valor do elemento = ${elemento} `)
        }
    }  
})


let vetor2 = [5, 6, 12, 32, 7]
vetor2.forEach((elemento, posicao) =>{
    if (posicao % 2 == 0){
        console.log(`Valor do elemento ${elemento} e sua posição ${posicao}`)
    }
})

let filmes = [
    {
        nome: "Vingadores",
        ano: 2018,
        classificacao: "aventura"
    },
    {
        nome: "Batman",
        ano: 2019,
        classificacao: "suspense"
    },
    {
        nome: "X-Men",
        ano: 2020,
        classificacao: "ficção"
    }
]
// percorrer os filmes
// elemento representa cada objeto do vetor
filmes.forEach((elemento) => {
    console.log(`Qual o nome do filme ${elemento.nome}, Ano: ${elemento.ano}, Classificação: ${elemento.classificacao}`)
})

// função map
// pode alterar o conteudo do vetor original 
let vetor = [2, 4, 6, 8, 9] // inicia o vetor
vetor = vetor.map((elemento) => { // captura o vetor criando um novo
    return (elemento * 2) // multiplica o elemento do vetor por 2
})
console.log(vetor)

// exemplo com a função reduce
let vetor = [10, 20, 30, 40, 50] // inicia o veor
let soma = vetor.reduce((total, elemento) => { // captura o vetor criando um novo usando reduce
    return total + elemento // soma o total + elementos 
})  
console.log(soma)

let vetor5 = [5, 9, 12, 15, 18]
let soma = vet.reduce((total,elemento)=>{
    return total + elemento
})
   console.log(soma)
})

let vetor = [5, 9, 12, 15, 18]
// vetor5 (5, 9) => 14
// vetor5 (14, 12) => 26
// vetor5 (26, 15) => 41
// vetor5 (41, 18) => 59
let soma = vetor5.reduce((total, elemento) => {
    return total + elemento
})

// exemplo da função filter
let vetor6 = [6, 9, 3, 7, 10]
let pares = vetor6.filter((elemento) =>{
    return elemento % 2 == 0
})
console.log(pares)

// prova 
let vetor6 = [6, 9, 3, 7, 10]
let pares = vetor6.filter((elemento) =>{
    if (elemento % 2 == 0){
        pares = elemento
    }
})
console.log(pares)

// usando o for
let carros = ["BMW", "Volvo", "MIni"];
let text = "";

for(let elemento of carros){
    console.log(`${elemento}`)
}