//arquivo atual de estudo, depois é renomeado

//Arrow Functions
//vetor
const arr = [1, 3, 4, 5, 6];

//percorre o vetor
const newArr = arr.map(item => item * 2);

console.log(newArr);


//substituindo a function teste 
//em array
const teste = () => {
    return 'teste';
}

console.log(teste());   

//em array
const teste = () => [1, 2, 3];

console.log(teste());   

//em objetos
const teste = () => ({ nome: 'Diego' });

console.log(teste());   