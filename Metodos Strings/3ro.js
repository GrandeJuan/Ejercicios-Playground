function reemplazoFastFast(texto, palabraA, palabraB){
    let frase = texto;
    return(frase.replace(palabraA, palabraB))
};

console.log(reemplazoFastFast('Viva la milanesa', 'milanesa', 'patria'));