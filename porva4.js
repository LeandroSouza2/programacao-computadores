chefe ()

function chefe(){  
    let matriz = [] 
    let vetor = [] 

    cadastraPessoa(matriz, vetor)
    cadastraMóvel(matriz, vetor)
    calculaMóvelMaisCaro(matriz, vetor)
    calculaCpfMóvelMaisCaro(matriz, vetor)

}

function calculaCpfMóvelMaisCaro(mat, vet){
    for(let j=0;j<3;j++){
        let MóvelMaisCaro = mat[0][j]
        let CpfMóvelMaisCaro = vet[0].Cpf
        for(let i=0;i<4;i++){ 
            if (mat[i][j] > maisPontos){
                MóvelMaisCaro = mat[i][j]
                CpfMóvelMaisCaro = vet[i].Cpf
            }
        }
    }
    console.log(` O movel mais caro é ${MóvelMaisCaro} e quem possui é ${CpfMóvelMaisCaro}`)
}

function calculaMediaPontos(mat, vet){
    for(let i=0;i<4;i++){ // para cada time
        for(let j=0;j<3;j++){ // para cada rodada
            vet[i].media = vet[i].media + mat[i][j]
        }
        // terminamos de acumular
        vet[i].media = vet[i].media / 3 // calcula a media
    }
    console.log(vet)
}


function cadastraPessoa(mat, vet){
    for(let i=0;i<4;i++){ // para cada time
        let objeto = new Object()
        objeto.Rg - Number(prompt('Informe o Rg da pessoa'))
        objeto.Cpf = Number(prompt('Informe o Cpf da pessoa'))
        objeto.nome = prompt(' Informe o nome da pessoa')
        // adciona no vet
        vet.push(objeto)
        // cria o vetor na matriz
        mat[i] = []
        for(let j=0;j<3;j++){ // para cada pessoa
        

        }
    }
}

function cadastraMóvel(mat, vet){
    for(let i=0;i<4;i++){ // para cada time
        let objeto = new Object()
        objeto.Rg - Number(prompt('Informe o Rg da pessoa'))
        objeto.Cpf = Number(prompt('Informe o Cpf da pessoa'))
        objeto.nome = prompt(' Informe o nome da pessoa')
        // adciona no vet
        vet.push(objeto)
        // cria o vetor na matriz
        mat[i] = []
        for(let j=0;j<3;j++){ // para cada pessoa
        

        }
    }
}