import api from './api';

//classe pra controlar toda aplicação
class App{
    //inicializando as variáveis
    constructor(){
        //guarda toda a lista de repositórios
        this.repositories = [];

        //registrando referências
        this.formEl = document.getElementById('repo-form'); //form
        this.listEl = document.getElementById('repo-list'); //ul
        this.inputEl = document.querySelector('input[name=repository]');

        //vai registrar os eventos
        this.registerHandlers();
    }

    //ouvir o evento
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    //tem q adicionar um novo repositório dentro do array
    async addRepository(event){
        event.preventDefault(); //não deixa o form recarregar a página

        //pegar valor do input
        const repoInput = this.inputEl.value;

        //verificar se está preenchido
        if (repoInput.length === 0)
            return; //para de executar

        //se não entrar no return
        const response = await api.get(`/repos/${repoInput}`);

        // console.log(response.data);

        //desestruturação
        const{name, description, html_url, owner: {avatar_url}} = response.data;

        //buscando os dados, no data
        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });

        //apagar o conteúdo do input depois que ele salva
        this.inputEl.value = '';

        // console.log(this.repositories);
        this.render();    
    }

     //renderizar
     render() { 
        this.listEl.innerHTML = ''; //apagar tudo do array

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank'); //pra abrir uma nova aba
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            //joga na lista, está registrado dentro constructor
            this.listEl.appendChild(listItemEl); 
        })
    }

}



//instanciar a classe pra ela rodar
// const MeuApp = new App();
new App();