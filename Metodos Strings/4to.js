function menciona(texto, palabra){
    let frase = texto;
    if(frase.indexOf(palabra) == -1){
        return(false)
    }else{
        return(true)
    }
};

console.log(menciona('Viva la patria la unica grande y sabia', 'patria'));