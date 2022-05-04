'use strict'

const url = 'https://testeleonid.herokuapp.com/clientes'

const lerClientes = async (id='') => {
    const response = await fetch(`${url}/${id}`)
    return await response.json()

}

const criarCliente = async (cliente) => {
    
    const opcoes = {
        'method': 'POST',
        'body': JSON.stringify(cliente),
        'headers': {
            'content-type':'application/json'
        }

    }

    const response = await fetch(url, opcoes)
    console.log(response.ok)

}

const deletarCliente = async (posicao) => {
    const opcoes = {
        'method':'DELETE'
    }
    
    const response = await fetch(`${url}/${posicao}`, opcoes)
    console.log(response.ok)
}

const atualizarClientes = async (cliente) => {
    const opcoes = {
        'method': 'PUT',
        'body': JSON.stringify(cliente),
        headers: {
            'content-type': 'application/json'
        }
    }
    const response = await fetch(`${url}/${cliente.id}`, opcoes)
    console.log('ATUALIZAR', response.ok)
}

export{
    lerClientes,
    criarCliente,
    deletarCliente,
    atualizarClientes
}