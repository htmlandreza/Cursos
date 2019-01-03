//AJAX

//Inicinado o AJAX
var xhr = new XMLHttpRequest();

//Buscar informação (método e url)
xhr.open('GET', 'https://api.github.com/users/htmlandreza');
xhr.send(null); //parâmetro

//executa depois que a requisição terminar
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){ //resposta voltou
        console.log(JSON.parse(xhr.responseText)); //mostra o corpo da requisição retornando em obj
    }
}