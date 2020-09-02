
chefe()

function chefe(){
    var vetor = []
    do {

        var opcao = Number(prompt(`Digite \n [1]. Entrada \n [2]. Média de idade \n [3]. Maior idade \n [4]. Qtde \n [5]. Percentual \n [6]. Sair`))
        switch(opcao){
            case 1: entrada(vetor)
            break
            case 2: calcularMedia(vetor)
            break
            case 3: calcularMaiorIdade(vetor)
            break
            case 4: calcularQtde(vetor)
            break
            case 5: calcularPercentual(vetor)
            break
            case 6: console.log(` Obrigado por utilizar nosso programa`)
            break
            default: console.log(` Opçao invalida, tente novamente`) 
        }
    
    }
    while (opcao != 6)
}

function entrada(vet){
    console.log(`Entrou na funçao entrada`)

    let objeto = new Object()
    objeto.sexo = prompt(" informe M para masculino e F para feminino").toUpperCase()
    objeto.altura = Number(prompt(' Informe a altura'))
    objeto.idade = Number(prompt('Informe a idade'))
    objeto.olhos = prompt('Informe A (azuis) V (verde) C (castanho').toUpperCase()

    vet.push(objeto)
    console.log(`Habitante inserido com sucesso`)
    

}

function calcularMedia(vet){
    console.log(`Entrou na funçao calcular media`)
    let soma = 0
    let qtde =0
    for(let i = 0; i<vet.length; i++){
        if((vet[i].olhos == "C") && (vet[i].altura > 1.60)){
            soma = soma + vet[i].idade
            qtde++

        }
    }
    console.log(`A media é de ${calculaMedia}`)

}

function calcularMaiorIdade(vet){
    console.log(`Entrou na funçao calcular maior idade`)
    let maiorIdade = vet[0].idade
    for(let i=1; i< vet.length; i++){
        if(vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade
        }
    }
    console.log(` A maior idade é de *${maiorIdade}`)

}

function calculaQtde(vet){
    let qntfem = 0
    for(let i = 0; i < vet.length; i++) {
        if(((vet[i].sexo == 'F' && vet[i].idade >= 20 && vet[i].idade <= 45))
        || 
        ((vet[i].sexo == 'F' && vet[i].corolhos == 'V' && vet[i].altura < 1.70))){
            qntfem++
        }   
    }
    console.log(`A quantidade de mulheres com idade entre 20 e 45 anos OU com olhos verdes e altura menor que 1.70 é ${qntfem}`)
}

    

function calculaPercentual(vet){
    console.log(`Entrou na funçao calcular percentual`)
    let conta = 0
    for(let i8 =1; i<vet.length; i++){
        if (vet[i].sexo == "M"){
            conta++
        }
    }
    console.log(`O percentual de homens é ${(conta/vet.length)*100}`)
}