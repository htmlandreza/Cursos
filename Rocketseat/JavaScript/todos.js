//JavaScript

//Referenciando Elementos da DOM
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Armazenamento da li (ToDos)
//buscar o arquivo local storange - JSON pra converter o array em string
//definindo o OR para definir valores padrões caso não encontre o stornage
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//Mostrar os arrays em tela
function renderTodos(){

    //exclui o conteúdo da lista na hora de adicionar um novo item (pra não mostrar na tela)
    listElement.innerHTML = '';

    for (todo of todos){
        //Criando elemento de lista e texto do elemento
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo); //pode ser a mesma variável

        //adicionando link de excluir
        var linkElement = document.createElement('a');
        //declarando atributos do link
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');


        //Adicionando o texto dentro do elemento
        todoElement.appendChild(todoText);
        //Adicionando o todo a lista
        listElement.appendChild(todoElement);

        //Adicionando o texto dentro do link 
        linkElement.appendChild(linkText);
        //Adicionando o link dentro da lista (todo)
        todoElement.appendChild(linkElement);

        //recuperar a posição do todo
        var pos = todos.indexOf(todo);
        //Atribui um atributo com uma função com parâmetro (concratenando a string)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    }
}

renderTodos();

//Adicionar um novo ToDo
function addTodo(){
    //recuperar o valor do input
    var todoText = inputElement.value;
    //adicionando no array (lista)
    todos.push(todoText);
    //apagar o texto atual do input (limpar)
    inputElement.value = '';
    //chamando a função que mostra o array
    renderTodos();

    //chamando a função que salva localmente
    saveToStorange();
}

//chamando a função addTodo quando clicar no botão Adicionar
buttonElement.onclick = addTodo;

//Remover ToDo (excluir do array)
function deleteTodo(pos){
    //parâmetro e quantidade de itens para remover
    todos.splice(pos, 1);
    //chamando a função para renderizar o array
    renderTodos();

    //chamando a função que salva localmente
    saveToStorange();
}

//Local Storange
function saveToStorange(){
    //acessar o storange
    //passa a chave e o valor - o JSON transformar o vetor em string
    localStorage.setItem('list_todos', JSON.stringify(todos));
}