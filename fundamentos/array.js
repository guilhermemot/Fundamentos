const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 9.3
console.log(valores[4])
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //coloca varios elementos dentro de um array
console.log(valores)

console.log(valores.pop())// vai mostrar o ultimo elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores)