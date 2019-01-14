//Async e Await

//Promise
const minhaPromise = () => new Promise((response, reject) => {
    setTimeout(() => { response('OK')}, 2000);
});

// //método padrão de usar Promise
// minhaPromise().then(response => {
//     console.log(response);
// })
// .catch(err => {});


// //a partir do ES8, pode-se usar
// //definir função com async no inicio
// async function executaPromise(){
//     //await substitui o .then e o await com o nome da função que irá retornar
//     const response = await minhaPromise(); //() pra executar

//     console.log(response);
// }


// executaPromise();

//com arrow function
//coloca o async antes dos parâmetros da função
const executaPromise = async() => {
    console.log(await minhaPromise()); //await substitui o .then
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();