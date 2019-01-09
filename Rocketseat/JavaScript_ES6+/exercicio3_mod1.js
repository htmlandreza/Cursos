//Exercício 3

//3.1
//vetor
const arr = [1, 2, 3, 4, 5];
//map: percorre o vetor e  realiza uma ação
arr.map(item => item + 10 );

//3.2
const usuario = { nome: "Diego", idade: 23 };

//parâmetro, quando é um só não precisa de ()
// => declara como function e depois dela é o comando
const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);

//3.3
const nome = "Andreza";
const idade = 20;

const mostraUsuario = (nome = "Diego", idade = 23) => ({nome, idade});

console.log(mostraUsuario()); //retorna com o valor que foi estabelecido na function
console.log(mostraUsuario(nome, idade)); //retorna com os valores das variáveis
console.log(mostraUsuario(idade));

//3.4
//Promessas: resolve quando o resultado for sucesso e reject quando não for

const promise = () => new Promise((resolve, reject) => resolve());