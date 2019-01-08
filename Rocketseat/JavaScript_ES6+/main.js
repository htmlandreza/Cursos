//Classe Herança
class List{
    constructor(){
        this.data = [];
    }
    
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

//Classe
class TodoList extends List{ //Herança List
    constructor(){
        super(); //chama a classe pai - List

        this.usuario = 'Diego';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
   
}

//instanciar classe
const MinhaLista = new TodoList(); 

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo('Novo Todo');
}

MinhaLista.mostraUsuario(); //Chama o método da classe