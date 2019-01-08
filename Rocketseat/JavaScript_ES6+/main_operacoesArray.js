//vetor
const arr = [1, 3, 4, 5, 8, 9];

//map
const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

//reduce
const sum = arr.reduce(function(total, next){
    return total + next;
});

//total 0
//next 1

//total 1
//next 3

//total 4
//next 4

//e assim por diante

console.log(sum);

//filter
const filter = arr.filter(function (item){
    //pegar os numeros pares
    //retornar true se o item está no arr
    return item % 2 === 0; //comparação sempre retorna true ou false
});

console.log(filter);

//find
const find = arr.find(function(item){
    return item === 4;
})

console.log(find); //seu retorno é exatamente o número