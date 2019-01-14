//Módulo 03

//Exercício 1 de Async/Await

//1.1
//promise
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

//função
const umPorSegundo = async() => {
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay()
    console.log('3s');
}

umPorSegundo();

//1.2
import axios from 'axios';

async function getUsersFromGithub(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);

        console.log(response.data)
    }
    catch (err){
        console.warn("Usuário não existe");
    }
}

getUsersFromGithub("htmlandreza"); //Existente
getUsersFromGithub("htmlandreza1"); //Não existe

//1.2

class Github{
    static async getRepositories (repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);    
        }
        catch (err){
            console.warn("Repositório não existe");
        }
    }
}

Github.getRepositories("Cursos/tree/master/Rocketseat");
Github.getRepositories("rocketseat/dslkvmskv");

//1.3

const buscaUsuario = async usuario => {
    try{
        const response = await axios.get(`http://api.github.com/users/${usuario}`);
        
        console.log(response.data);
    }
    catch(err){
        console.warn("Usuário não existe");
    }
};

buscaUsuario("htmlandreza");