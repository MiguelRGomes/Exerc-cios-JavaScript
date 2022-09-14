let principal = () => { // iniciar função
    // declarar variaveis 
    let opcao 
    let vetor = []
    let matriz = []
    // iniciar o menu com opções
    do {
        opcao = Number(prompt(`\n1. Cadastrar carro \n2. Média de notas do carro \n3. Carro com menor Nota \n4. Carro com menor média \n 5. Sair`))
        switch(opcao){
            case 1: cadastraCarro(vetor)
                break
            case 2: calculaMedia(vetor, matriz)
                break
            case 3: calculaVendasCarro(matriz,vetor)
                break
            case 4: calculaVendasTrimestre(matriz)
                break
            case 5: alert('Programa será encerrado')
                break
            default: alert('Opção inválida')
        }
    }
    while(opcao != 5)
}

// função para cadastrar carro 
let cadastraCarro = (vetor) => {
    let objeto = { // vetor de obejto com informações do carro
        marca: prompt("Informe a marca do carro"),
        modelo: prompt("Informe o modelo do carro"),
        ano: Number(prompt("Informe o ano do carro")) 
    }
    vetor.push(objeto)
}

// função para capturar nota e realizar a media
let calculaMedia = (vetor, matriz) =>{
    for(let i=0;i<vetor.length;i++){ // para cada carro
        matriz[i] = []
        for(let j=0;j<5;j++){ // para as 5 notas
            matriz[i][j] = Number(prompt(`Informe a nota ${j+1} do carro de marca ${vetor[i].marca} e modelo ${vetor[i].modelo} conforme as avaliações no Guia Quatro Rodas da Editora Abril.`))
        }
    }
    let soma = 0
    let media = 0
    soma = soma + matriz[i][j] // soma todas as notas 
    media = soma / vetor[i] // realiza a media de todas as notas
    alert(`A média das notas do carro ${vetor[i].modelo} é ${media}`)  
}



