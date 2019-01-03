//Exercícío 1

function checaIdade(idade){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //condição ternária
            return idade >= 18 ? resolve() : reject(); //() para executar
        }, 2000);
    });
};

checaIdade(15)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });


