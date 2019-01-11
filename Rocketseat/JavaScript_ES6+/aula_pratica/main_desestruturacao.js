//objeto
const usuario = {
    nome: 'Andreza',
    idade: '20',
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    },
};

console.log(usuario);

//Desestruturação
const { nome, idade, endereco :{ cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

//função
function mostraNome(usuario){
    console.log(usuario.nome);
}

mostraNome(usuario);

//função com desestruturação
                    //aqui seta só os atributos
function mostraNome({nome, idade}){
    console.log(nome, idade);
}

//objeto esta sendo setado aqui
mostraNome(usuario);