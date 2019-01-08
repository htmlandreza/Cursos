//REST

//objeto
const usuario = {
    nome: 'Andreza',
    idade: 20,
    empresa: 'ONS'
}
            //REST da propriedade
const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

//vetor
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//função
function soma(a, b){
    return a + b;
}

console.log(soma(1, 3));

//função com REST
function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

//SPREAD
//arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//unir
const arr3 = [...arr1, ...arr2];

console.log(arr3);

//objeto
const usuario1 = {
    nome: 'Andreza',
    idade: 20,
    empresa: 'ONS'
};

const usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2);