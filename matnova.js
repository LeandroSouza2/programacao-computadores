chefe()

function chefe(){
    // declarar a matriz
    let matriz = [] // uma matriz e um vetor
    // vamos criar a matriz com 3 linhas
    matriz [0] = [] // cada linha da matriz e um vetor
    matriz [1] = [] // cada linha da matriz e um vetor
    matriz [2] = [] // cada linha da matriz e um vetor
    cadastra(matriz) // cadastra 3 alunos
    consultaMediaAlunos(matriz) // calcula a media das notas
}

function cadastra(mat){ // mat representa a matriz na funçao chefe()
    for(let i=0; i<3; i++){ // são 3 alunos
        alert(` informe 4 notas do aluno ${i+1}`)
        for(let j=0; j<4; j++){ // são 4 notas
            mat[i][j] = Number(prompt(` Informe a nota ${j+1}`))
        }
    }
}

function consultaMediaAlunos(mat){ // mat representa a matriz na funçao chefe()
    let medias = [0,0,0]
    for(let i=0;i<3;i++){ // para cada aluno
        for(let j=0;j<4;j++){ //para cada nota
            //soma no vetor na posição i
            medias[i] = medais[i] + mat[i][j]
        }
        // acabaram as notas do aluno i
        medias[i] = medias[i] / 4
    }
    // acabaram os alunos
    console.log(` Valor das médias ${medias}`)
}