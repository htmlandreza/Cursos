//Exercício 4

//4.1
//objeto
const empresa = {
    nome: "Rocketseat",
    endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
    }
};

//desestruturação
const {nome, endereco:{ cidade, estado}} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2
//desestruturação em parâmetros
function mostraInfo({ nome, idade }){
    //tamplate literals
    return `${nome} tem ${idade} anos.`
}

//mostraInfo({nome: 'Andreza', idade: 20}
console.log(mostraInfo({nome: 'Andreza', idade: 20}));
