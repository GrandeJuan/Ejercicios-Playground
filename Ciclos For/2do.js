function noParesDeContarImparesHasta(numero){
    let acumuladorDeImpares = 0
    for(let i = 0 ; i <= numero ; i++){
        if((i % 2) !== 0){
            acumuladorDeImpares = acumuladorDeImpares + 1 
        }
        }
        return acumuladorDeImpares
    }
console.log(noParesDeContarImparesHasta(7))
