

// criando uma variável do tipo função
var cadastra = function(vet){
   // insere objeto no vetor
    vet.push(
        {
            codigo: Number(prompt(`Informe codigo`)),
            aro: Number(prompt(`Informe aro`)),
            modelo: prompt(`Informe modelo`),
            marca: prompt(`Informe marca`),
            valor: Number(prompt(`Informe valor`)),
            ano: Number(prompt(`Informe ano de fabricação`))
        }
    )
    // se for a primeira bicicleta, vet[0].codigo
    // se for a segunda bicicleta, vet[1].codigo
    console.log(`Bike ${vet[vet.length-1].codigo} inserida com sucesso `)
}

var codigo // escopo globar
var busca = function(vet){
    codigo = prompt(`Informe codigo`)
    let bike = vet.find(busca2) // faz um for e verifica se encontra o desejado
    console.log(bike)
}
// busca2(bike0)
// busca2(bike1)
// bsuca2(bike2)
function busca2(objeto){
    return objeto.codigo == codigo
}

var soma = function(vet){
    let resultado = vet.reduce(soma2, 0) // faz um for e soma os valores das bikes - inicia a soma com 0
    console.log(`A soma dos valores é ${resultado}`)
}

// a bike 0 tem valor 10 - a bike 1 tem valor 20 - a bike 2 tem valor 30
//soma2(0, bike0) -> 10
// soma2(10, bike1) -> 30
// soma2(30, bike2) -> 60
function soma2(total, objeto){
    return total + objeto.valor
}




var vetor = []
cadastra(vetor)
cadastra(vetor)
cadastra(vetor)
busca(vetor)
soma(vetor)
buscaMarca(vetor)