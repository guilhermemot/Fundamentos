let capInicial = 2
let txDeJuros = 5
let tempDeAplicacao = 3

montDaAplicacaoS = (capInicial, txDeJuros, tempDeAplicacao) =>{
    return console.log(`Juros simples: ${capInicial * txDeJuros * tempDeAplicacao }`)
}

montDaAplicacaoS(capInicial, txDeJuros, tempDeAplicacao)

montDaAplicacaoC = (capInicial, txDeJuros, tempDeAplicacao) => {
    this.resultado
    resultado = capInicial * Math.pow((1 + txDeJuros), tempDeAplicacao)
    return console.log(`Juros composto = ${resultado}`)
}
montDaAplicacaoC(capInicial, txDeJuros, tempDeAplicacao)