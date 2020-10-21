


// função forEach() -> itera no vetor
var numeros = [2, 4, 6, 8]
numeros.forEach(exe1) // substitui o for - itera no vetor
numeros.forEach(exe2)

// exe1(2, 0)
// exe1(4, 1)
// exe1(6, 2)
// exe1(8, 3)
function exe1(elemento, posicao){
    // vamos mostrar apenas elementos pares nas posições pares
    if ((elemento % 2 == 0) && (posicao % 2 == 0)){
        console.log(elemento)
    }
}

function exe2(elemento){ // elemento é ímpar
    if (elemento % 2 == 0){
        console.log(elemento)
    }
}

// função map() -> não altera o tamanho do vetor resultante
var vetor = [4, 6, 9, 13, 18]
var novo = vetor.map(exe3) // itera no vetor
var novo2 = vetor.map(exe4)
console.log(novo) // 14 16 19 23 28
console.log(novo2) 

function exe3(elemento){
    return elemento + 10
}

function exe4(elemento){
    if (elemento % 2 == 0){
        return elemento
    }
}

// função filter -> pode alterar o tamanho do vetor resultante
var eleitos = [4, 6, 7, 9, 12, 13]
var novosEleitos = eleitos.filter(exe5)
console.log(novosEleitos)
console.log(novosEleitos.length)

function exe5(elemento){
    return elemento < 10
}


// função reduce -->reduz o vetor a um unico valor

var idades = [7, 8, 9, 10, 11, 12, 13, 14]
var soma =idades.reduce(exe5)

//exe6(7, 8) -> 15
//exe6(15, 9) -> 24
//exe6(24, 10)-> 34
//exe6(34, 11) -> 45
//exe6(45, 12) -> 57
//exe6(57, 13) -> 78
//exe6(70, 14) -> 84

function exe6(total, elemento){
    return total + elemento
}

var notas = [8, 4, 6, 9, 1]
var maior = notas.reduce(exe8)
console.log(maior)

//exe8(8,4)
//exe8(8,6)
//exe8(8,9)
//exe8(8,1)
function exe8(resultado, elemento){

    // operador ternario
    return(resultado > elemento) ? resultado : elemento
    // if(resultado > elemento){
    //  return resultado
    // }
    // else {
    // return elemento
    // }
    }
    


// função some -> se existe algum valor no vetor

var nomes = ["Pedro", "Lucas", "Carlos"]
var resultado = nomes.some(exe7)
console.log(resultado)

function exe7(elemento){
    return elemento == "Lucas"
}
