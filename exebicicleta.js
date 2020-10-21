// a nossa função pode ser uma variavel 
// estamos criando uma variável do tipo função
var cadastra = function(vet) {
    // criando o objeto
    // let objeto = new Object()
    // objeto.codigo = Number(prompt('Informe o código'))
    // objeto.aro = Number(prompt('Informe o aro da bicicleta'))
    // objeto.modelo = prompt('Informe o modelo da bicicleta')
    // objeto.marca = prompt('Informe a marca da bicicleta')
    // objeto.valor = Number(prompt('Informe o valor da bicicleta'))
    // objeto.ano = prompt('Informe o ano de fabricação')
    vet.push(
    {
        codigo: Number(prompt('Informe o código')),
        aro: Number(prompt('Informe o aro da bicicleta')),
        modelo: prompt('Informe o modelo da bicicleta'),
        marca: prompt('Informe a marca da bicicleta'),
        valor: Number(prompt('Informe o valor da bicicleta')),
        ano: Number(prompt('Informe o ano de fabricação'))
    }
    )
    // se for a primeira bicicleta, vet[0].codigo
    // se for a segunda bicicleta, vet[1].codigo
    console.log(`Bicicleta ${vet[vet.length-1].codigo} inserida com sucesso`)
}

var codigo // escopo global
var busca = function(vet) {
    codigo = prompt('Informe o código da bicicleta')
    // retorna o primeiro que achar
    let bike = vet.find(busca2)
    console.log(bike) 
}
//busca2(bike0)
//busca2(bike1)
//busca2(bike2)
function busca2(objeto) {
    return objeto.codigo == codigo
}

var soma = function(vet) {
    let resultado = vet.reduce(soma2, 0) //faz um for e soma os valores das bikes - inicia a soma com 0
    console.log(`A soma dos valores é${resultado}`)
}

// a bike 0 tem valor 10 - a bike 1 tem valor 20 - a bike 2 tem valor 30
// soma2(0, bike0) -> 10
// soma2(10, bike1) -> 30
// soma2(30, bike2) -> 60
function soma2(total, objeto) {
    return total + objeto.valor
}

var marca
var buscaMarca = function(vet) {
    marca = prompt('Informe a marca')
    // retorna todos que encontrar 
    let novas = vet.filter(buscaMarca2)
    console.log(novas)
}

function buscaMarca2(objeto) {
    return marca == objeto.marca
}

var soma3 = function(vet) {
    let novo = vet.map(soma32)
    console.log(novo)
}

function soma32(objeto) {
    objeto.aro = objeto.aro + 3
    return objeto
}

var vetor = []
cadastra(vetor)
cadastra(vetor)
cadastra(vetor)
busca(vetor)
soma(vetor)
buscaMarca(vetor)
soma3(vetor)