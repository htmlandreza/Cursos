//Axios junto com Async e Await
import Axios from "axios";

//classe
class Api{
    //método com async - função assíncrona
    static async getUserInfo(username){
        try{
            const response = await Axios.get(`https://api.github.com/users/${username}`); 
            
            console.log(response);
        }
        catch (err){
            console.warn('Erro na API'); //warn mostra no console mensagem de atenção
        }
    }
};

Api.getUserInfo('htmlandreza'); //usuário existe
 
Api.getUserInfo('htmlandreza1'); //usuário não existe cai no catch