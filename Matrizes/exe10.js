let exe10 = () => {
    
    //declaração de uma matriz
    let matriz = []
    matriz[0] = [1,1,1,1,1] // vetor 1
    matriz[1] = [2,2,2,2,2] // vetor 2
    matriz[2] = [3,3,3,3,3] // vetor 3
    matriz[3] = [4,4,4,4,4] // vetor 4
    matriz[4] = [5,5,5,5,5]
    
    let opcao 
    do {
        opcao = Number(prompt(`1. Soma da linha 4 \n2. Soma da coluna 2  \n3. Soma da diagonal principal \n4. Soma da diagonal secundária \n5. Soma todos elementos \n6. Sair`))
        switch((opcao)){
            case 1: cadastra(matriz)
            
            case 1: somaLinha(matriz)
                    break
            case 2: somaColuna(matriz)
                    break
            case 3: somaDiagonalPrincipal(matriz)
                    break
            case 4: somaDiagonalSecundaria(matriz)
                    break
            case 5: somaTotal(matriz)
            break
            case 6: alert(`Saindo do programa`)
                    break
            default: alert(`Opção Inválida`)
        }
    }
    while (opcao != 6)  
}                  

let soma
let somarLinha = []
let somaLinha = (matriz) => {
    for (let i = 0; i < 5; i++) {
        soma = 0
        for (let j = 0; j < 5; j++) {
            soma = matriz[i][j];
        }
        somarLinha[i] = soma;
    // acabou de somar
    alert(`A soma da linha 2 é ${somarLinha}`)
    }
}

let somaDiagonalPrincipal = (matriz) => {
    for (let i = 0; i < 5; i++) {
        soma = 0
        for (let j = 0; j < 5; j++) {
            if(i == j){
                soma = soma + matriz[i][j];
            }
        }
    // acabou de somar
    alert(`A soma da diagonal principal é ${soma}`)
    }
}

let somaDiagonalSecundaria = (matriz) => {
    for (let i = 0; i < 5; i++) {
        soma = 0
        for (let j = 0; j < 5; j++) {
            if(matriz[i] +[4 - j]){
                soma = soma + matriz[i][j];
            }
        }
    // acabou de somar
    alert(`A soma da diagonal principal é ${soma}`)
    }
}

let somaTotal = (matriz) => {
    for (let i = 0; i < 5; i++) {
        soma = 0
        for (let j = 0; j < 5; j++) {
            soma += matriz[i][j];
        }
    // acabou de somar
    alert(`A soma da total da matriz é ${soma}`)
    }
}

