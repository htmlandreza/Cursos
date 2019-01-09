//vetor

const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" }
  ];

//map
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);


//filter
const rocketseat18 = usuarios.filter(
    usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
);
console.log(rocketseat18);

//find
const google = usuarios.find(usuario => usuario.empresa === "Google");
console.log(google);

//calculo
const calculo = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);
console.log(calculo);