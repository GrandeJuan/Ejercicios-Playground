function agregarHttp(url) {
    return 'http://' + url
}

function procesar(url,callback){
    let arrayUrls = [];
    for(let i = 0; i < url.length; i++){
        arrayUrls.push(callback(url[i]));
    }
return arrayUrls
};


console.log(agregarHttp(["www.google.com","www.yahoo.com"]))
let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],(url) => url.length) // Firulete maximo
console.log(largoDeElmentos); // imprime [ 14, 13 ]