chefe()

function chefe(){

    //vet de escopo local
    let vendedores = []
    let vendas = []
    do {
        let opcao = Number(prompt(' Escolha [1], cadastrar vendedor [2], cadastrar venda [3], sair'))
        switch(opcao){
            
            case 1:  cadastrarVendedor(vendedores) // essa passagem é por referencia e torna o vetor de escopo global
                      break
            case 2:  cadastraVendas(vendas, vendedores)
                      break
            case 3: console.log(` Tchau`)
            default: console.log(` Tente novamente...`)
        }
            
        }
        while (opcao != 3)
    }
    
    


function cadastraVendedor(vended){ // vended representao vetor vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(' Informe codigo do vendedor'))
    objeto.nome = prompt(' Informe nome do vendedor')
    //verifica se o codigo ja existe
    for(let i=0; i< vended.length; i++){
        if (vended[i].codigo == objeto.codigo){
            console.log(' Cadastro cancelado pois ja existe um vendedor com este codigo')
            return 0 // sai da funçao pois não iremos cadastrar
        }
    }
    // insere no vended, mas na verdade insere no vetor vendedores
    vended.push(objeto)
}

function cadastraVendas(vdas, vdes){ // vdas representa o vetor vendas e vdes representa o vetor vendedores

    let objeto = new Object()
    objeto.codigo = Number(prompt(' Informe codigo da venda'))
    objeto.vendedor = Number(prompt('Informe código do vendedor'))
    objeto.mes = Number(prompt(' Informe mes da venda'))
    objeto.valor = Number(prompt(' Informe valor da venda'))
    // verifica se o vendedor existe
    //percorre o vetor de vendedores (vdes)
    for(let i=0; i<vdes.length; i++){
        if (objeto.vendedor == vdes[i].codigo){ // achamos o vendedor
            // verifica se existe venda para este vendedor no mesmo mes - não podemos registrar venda
            // percorre o vetor de vendas
            for(let j=0; j<vdas.length; i++){
                if ((objeto.mes == vdas[i].mes) && (objeto.vendedor == vdas[i].vendedor)){
                    console.log(' Nao podemos registrar venda')
                    return 0 // sai da funçao
                }
            }
            // ja percorreu e nao achou, entao vamos inserir
            // insere a venda em vdas, que na verdade é vendas
            vdas.push(objeto)
            console.log(` Venda registrada`)
            return 0 // sai da funçao
        }
    }
    console.log(` Vendedor não existe`)
    
}