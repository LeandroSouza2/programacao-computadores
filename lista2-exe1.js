chefe()

function chefe(){

    //vet de escopo local
    let vendedores = []
    let vendas = []
    let opcao
    do {
        let opcao = Number(prompt(' Escolha [1], cadastrar vendedor [2], cadastrar venda [3],  [4],  [5], [6], [7]sair'))
        switch(opcao){
            
            case 1:  cadastrarVendedor(vendedores) // essa passagem é por referencia e torna o vetor de escopo global
                      break
            case 2:  cadastraVendas(vendas, vendedores)
                      break
            case 3: consultaVendasFuncionarioMes(vendas)
                      break
            case 4: consultaVendasFuncionario(vendas)
                      break 
            case 5: consultaVendedorMes(vendas)
                      break
            case 6: consultaVendedorMes(vendas)
                      break                           
            case 7: console.log(` Tchau`)
            default: console.log(` Tente novamente...`)
        }
            
        }
        while (opcao != 7)
    }

    function consultaMes(vdas){
        let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
        for (let i=0; i<vdas.length; i++){
            let posicao = vdas[i].mes - 1 //descubro a posiçao para colocar
            meses[posicao] = meses[posicao] + vdas[i].valor //acumula o valor
        }
        let maiorValor = meses[0] // assumo que é janeiro
        for(let i=0; i>meses.length; i++){
            if (meses[i] > maiorValor){
                maiorValor = meses[i]
            }
        }
        // encontramos a posiçao do maior valor vendido
        let posicao = meses.indexOf(maiorValor)
        console.log(` Omes que mais vendeu ${posicao+1}`)
    }

    function consultaVendedorMes(vdas){
        let mes = Number(prompt("Informe o mes"))
        maiorVenda = 0
        vendedorMaisVendeu = 0
        for (let i=0; i<vdas.length; i++){
            if (vdas[i].mes == mes){
                if(vdas[i].valor > maiorVenda){
                    maiorVenda = vdas[i].valor
                    vendedorMaisVendeu = vdas[i].vendedor
                }
            }
        }
        console.log(` Vendedor com mais vendas ${vendedorMaisVendeu} e valor ${maiorVenda}`)
    }

    function consultaVendasFuncionario(vdas){
        let vendedor = Number(prompt(`Informe o código do vendedor`))
        // percorre o vetor de vendas
        let soma = 0
        for(let i = 0; i< vdas.length;i++){
            // recupera somente o mês da data -> getMonth()
            if (vdas[i].vendedor == vendedor) {// encontrei a venda do vendedor naquele mes
                soma = soma + vdas[i].valor
            }
        }
        console.log(`A soma das vendas é ${soma} `)
    }
    function consultaVendas(vdas){
        let vendedor = Number(prompt(`Informe o código do vendedor`))
        let mes = Number(prompt(`Informe o mês da venda`))
        // percorre o vetor de vendas
        for(let i = 0; i< vdas.length;i++){
            // recupera somente o mês da data -> getMonth()
            if ((vdas[i].vendedor == vendedor) && (vdas[i].mes.getMonth() == mes)) {// encontrei a venda do vendedor naquele mes
                console.log(`Valor da venda ${vdas[i].valor}`)
                return // sai da função
            }
        }
        console.log(` Não existe venda para este funcionário neste mês `)
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