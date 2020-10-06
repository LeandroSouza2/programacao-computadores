// exemplos de JS utilizando a especificação ES5
// vamos aprender
//Array.forEach()
//Array.map()
//Array.filter()
//Array.reduce()
//Array.every()
//Array.some()
//Array.indexOf()
//JSON.parse()
//JSON.stringify()
// Date.now() -> já aprendemos

chefe()

var conteudo = ""

function chefe(){

    let vetor = [10, 30, 50, 70, 90, 110, 130, 150, 170]
    
   // vetor.forEach(mostra) 

    vetor.forEach(acumula)

    // funcao(10, 0)
    // funcao(30, 1)
    // funcao(50, 2)
    // funcao(70, 3)
    // funcao(90, 4)

    // percorrer o vetor
   // for(let i=0;i<vetor.length;i++){
   //     console.log(`O elemento ${vetor[i]}  está na posição ${i}`)
   //  }    
}

// os parâmetros são somente o elemento
function acumula(elemento){
    conteudo = conteudo + " - " + elemento
}

// os parâmetros são o elemento e sua posição
function mostra(elemento, posicao){
    if (posicao % 2 == 0){
        console.log(`O elemento ${elemento}  está em posição par`)
    }
    else {
        console.log(`O elemento ${elemento}  está em posição ímpar`)
    }
}

// função map

var idades = [10, 13, 17, 18, 19, 20, 22, 26]

var novo = idades.map(multiplica) // estamos fazendo um for no vetor

var novo2 = idades.map(parImpar)
// multiplica(10)
// multiplica(13)
// multiplica(17)
// multiplica(18)
// multiplica(19)
// multiplica(20)
// multiplica(22)
// multiplica(26)

console.log(novo)
console.log(novo2)

function parImpar(elemento){
    if (elemento % 2 == 0 ){
        return 0
    }
    else {
        return 1
    }
}

function multiplica(elemento){
    return elemento * 2 // todos os elementos do vetor serão multiplicados por 2
}



// podemos criar variáveis do tipo função

// variável x é uma função
var x = function (){
    console.log(`variáveis do tipo de uma função`)
}

x()

// a variáveis soma é uma função
var soma = function (a, b){
    console.log(a + b)
}


soma(3, 6)

// a variáveil subtração é uma função
var subtracao = function (a, b){
    console.log(a - b)
}

subtracao(6, 1)


var vet = [1, 2, 3, 4, 5]

var novo = vet.filter(maior)

console.log(novo)

function maior(elemento){
    return elemento >= 3
}

// filter
// reduce
// some
