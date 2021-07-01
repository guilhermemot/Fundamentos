const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5))//retorna um valor nulo porem ele nao da erro
console.log(escola.charCodeAt(3))// retorna valor do numero da posição na tabela ask
console.log(escola.indexOf('3'))//vai retornar o valor que significa 3 dentro da string se o valor nao existir ele retorna nullo


console.log(escola.substring(1))// vai mostrar a string sem o valor na posição 1
console.log(escola.substring(0, 3))
console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + '!')
console.log(escola.replace(3, 'e'))
console.log('Ana,Maria,Pedro'.split(','))//transforma uma string em um array com os nomes
