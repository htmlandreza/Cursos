//Exercício 5

//5.1 
//array
const arr = [1, 2, 3, 4, 5, 6];

//rest
const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


//5.2
//spread
const usuario = {
    nome: "Diego",
    idade: 23,
    endereco: {
      cidade: "Rio do Sul",
      uf: "SC",
      pais: "Brasil"
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco:{...usuario.endereco, cidade: 'Londres'}};

console.log(usuario);
console.log(usuario2);
console.log(usuario3);