let valor // nao inicializada
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // evite atribuir undefined

console.log(!!produto.preco)
//delete produto.preco forma de tirar o produto da variavel
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)