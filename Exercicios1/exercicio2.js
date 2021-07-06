ladoA = 3
ladoB = 5
ladoC = 4

function triangulo(ladoA, ladoB, ladoC){
    if((ladoA == ladoB) && (ladoA == ladoC) && (ladoB == ladoC)){
        return console.log("Este triangulo tem lados iguais então ele é Equilatero")
    }else if((ladoA != ladoB) && (ladoA != ladoC) && (ladoB != ladoC)){
        return console.log("Este triangulo tem lados diferentes então ele é Escaleno")
    }else{
        return console.log("Este triangulo tem 2 lados iguais então ele seria um Isósceles")
    }
}

triangulo(ladoA, ladoB, ladoC)