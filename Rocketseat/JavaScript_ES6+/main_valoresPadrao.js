//função
function soma (a = 3, b = 6){
    return a + b;
};

console.log(soma ());

//transformando função em arrow function
const soma = (a = 3, b = 6) => a + b;
console.log(soma ());

console.log(soma(1));