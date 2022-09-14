let cadastraVendas = (matriz, vetor) =>{
    for(let i=0;i<vetor.length;i++){ // para cada carro cadastrado
        matriz[i] = [] // inicializa a linha da matriz
        for(let j=0;j<4;j++){
           matriz[i][j] = Number(prompt(`Informe o total de vendas da marca ${vetor[i].marca}, do modelo ${vetor[i].modelo} e no ${j} trimestre`))
        }
    }
}

let calculaVendasCarro = (matriz, vetor) => {
    for(let i=0;i<vetor.length;i++){ // para cada carro cadastrado
        let total = 0
        for(let j=0;j<4;j++){ // para cada trimestre 
           total = total + matriz[i][j]
        }
        alert(`O total vendido do carro marca ${vetor[i].marca} e modelo ${vetor[i].modelo} é ${total}`)
    }
}

let calculaVendasTrimestre = (matriz) => {
    for(let j=0;j<4;j++){ // para cada trimestre
        let totaltri = 0
        for(let i=0;i<vetor.length;i++){ // para cada carro 
           totaltri = totaltri + matriz[i][j]
        }
        alert(`O total vendido no trimestre ${j} foi ${totaltri}`)
    }
}


//let calculaMedia = (matriz, vetor) => {
    for(let j=0;j<vetor.length;j++){ // para cada carro cadastrado
        let soma = 0
        for(let i=0;i<5;i++){ // para cada trimestre 
           soma = soma + matriz[i][j];
        }
        alert(`A média de notas do carro da marca ${vetor[i].marca} e modelo ${vetor[i].modelo} é ${soma}`)
    }
}


