ax2 = 2
by = 8
c = -24
x1 = 0
x2 = 1

bascara = (ax2,by,c) =>{
    a = ax2
    b = by
    delta = Math.pow(b,2) - 4*a*c

    console.log(`Resultado de delta = ${delta}`)
    if(delta > 1){
    let vetor = [(-b + (Math.sqrt(delta)))/(2*a), (-b - (Math.sqrt(delta)))/(2*a)]

    console.log(`Resultado do bascara x1 = ${vetor[0]} x2 = ${vetor[1]}`)
    }else{
        console.log(`delta negativo`)
    }
}

bascara(ax2,by,c)