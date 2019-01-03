//Promises
var minhaPromise = function(){
    //resolve quando o resultado for sucesso
    //reject quando não for sucesso
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/htmlandreza');
        xhr.send(null); 

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){ //resposta voltou
                if (xhr.status === 200){ //sucesso
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject('Erro na requisição');
                }
            }
        }

    });
}

//chamando, resultado da promisse
minhaPromise()
    .then(function(response){
        console.log(response);
     })
    .catch(function(error){
        console.warn(error);
    });