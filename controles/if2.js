function teste1(num){
     if(num>7)
         console.log(num)//esse roda
         console.log('Final')//esse nao roda
}
// função if sem chaves so executa uma linha
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); {
        console.log(num)
    }
}
teste1(6)
teste1(8)