chefe()

function chefe(){
    var vetor = []
    do {

        var opcao = Number(prompt(`Digite \n [1]. CadastraPessoa \n [2]. CadastraImóvel \n [3]. SomaImóvel \n [4]. ImóvelMaisCaro \n [5]. Sair`))
        switch(opcao){
            case 1: Pessoa(vetor)
            break
            case 2: Imóvel(vetor)
            break
            case 3: SomaImóvel(vetor)
            break
            case 4: ImóvelMaisCaro(vetor)
            break
            case 5: Sair(vetor)
            console.log(` Obrigado por utilizar nosso programa`)
            
        }
    
    }
    while (opcao != 5)
}

function Pessoa(vet){
    console.log(`Entrou na funçao CadastraPessoa`)

    let objeto = new Object()
    objeto.Rg = Number(prompt(' Informe o Rg da pessoa'))
    objeto.Cpf = Number(prompt('Informe o Cpf da pessoa'))
    objeto.Nome = prompt(" informe o nome da pessoa")
    

    vet.push(objeto)
    console.log(`Pessoa cadastrada com sucesso`)
    

}
function Imóvel(vet){
    console.log(`Entrou na funçao CadastraImóvel`)

    let objeto = new Object()
    objeto.Endereço = prompt(" informe M para masculino e F para feminino")
    objeto.Código = Number(prompt(' Informe a altura'))
    objeto.Tamanho = Number(prompt('Informe a idade'))
    objeto.Tipo = prompt('Informe C (Casa) A (Apartamento)').toUpperCase()
    objeto.RgDono = Number(prompt('Informe o Rg do dono do imóvel'))

    vet.push(objeto)
    console.log(`Imóvel cadastrado com sucesso`)
    

}

function SomaDosImóveis(vet){
    console.log(`Entrou na funçao SomaImóvel`)
    let soma = 0
    for(let i = 0; i<vet.length; i++){
        if((vet[i].SomaImóvel == "Soma dos Imóveis"){
            soma = soma + vet[i].SomaImóvel
            

        }
    }
    console.log(`A Soma dos Imóveis é ${SomaImóvel}`)

}

function ImóvelMaisCaro(vet){
    console.log(`Entrou na funçao ImóvelMaisCaro`)
    let ImóvelMaisCaro = vet[0].idade
    for(let i=1; i< vet.length; i++){
        if(vet[i].Imóvel > ImóvelMaisCaro){
            ImóvelMaisCaro = vet[i].Imóvel
        }
        else(vet[i].ImóvelMaisCaro < ImóvelMaisCaro){
            ImóvelMaisCaro = ImóvelMaisCaro + 1
        }
    }
    console.log(` O movel mais caro é ${ImóvelMaisCaro}`)

}


