// par nome/valor
const saudacao = 'opa'// contexto lexico

function exec(){

    const saudacao = 'falaaaa'//contexto lexico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome : 'pedro',
    idade : 32,
    peso : 90,
    endereco:{
        logradouro: 'rua muito legal',
        numero: 12
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)