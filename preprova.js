chefe ()

function chefe(){  // declaraçao da matriz
    let matriz = [] // guarda os pontos dos times nas rodadas
    let vetor = [] // guarda os nomes , cidade e media de pontos dos times

    cadastra(matriz, vetor)
    calculaMediaPontos(matriz, vetor)
    calculaTimeMaisPontosRodada(matriz, vetor)

}

function calculaTimeMaisPontosRodada(mat, vet){
    for(let j=0;j<3;j++){ // para cada rodada
        let maisPontos = mat[0][j]
        let nometimeMaisPontos = vet[0].nome
        for(let i=0;i<4;i++){ // para cada time
            if (mat[i][j] > maisPontos){
                maisPontos = mat[i][j]
                nomeTimeMaisPontos = vet[i].nome
            }
        }
    }//terminamos os times
    console.log(` O time ${nomeTimeMaisPontos} fez ${maisPontos} na rodada ${j+1}`)
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


function cadastra(mat, vet){
    for(let i=0;i<4;i++){ // para cada time
        let objeto = new Object()
        objeto.nome - prompt('Informe nome')
        objeto.cidade = prompt(' IOnforme a cidade')
        objeto.media = 0 // define ocm 0
        // adciona no vet
        vet.push(objeto)
        // cria o vetor na matriz
        mat[i] = []
        for(let j=0;j<3;j++){ // para cada rodada
            mat[i][j] = Number(prompt(` Informe os pontos do time ${objeto.nome} na rodada ${j+1}`))

        }
    }
}