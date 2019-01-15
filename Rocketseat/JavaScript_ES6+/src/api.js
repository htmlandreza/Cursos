import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com', //todas as requisições irão sair desse endereço 
});

export default api;