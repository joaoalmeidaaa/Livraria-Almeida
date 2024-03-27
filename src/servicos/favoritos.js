import axios from "axios";

const favoritosAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getfavoritos() {
    try {
        const response = await favoritosAPI.get('/');
        return response.data;
    } catch (error) {
        console.error('Erro ao obter favoritos:', error);
        return [];
    }
}

async function postFavorito(id) {
    try {
        await favoritosAPI.post(`/${id}`);
        console.log(`Livro de id:${id} inserido nos favoritos.`);
    } catch (error) {
        console.error('Erro ao adicionar livro aos favoritos:', error);
    }
}

async function deleteFavorito(id) {
    try {
        await favoritosAPI.delete(`/${id}`);
        console.log(`Livro de id:${id} removido dos favoritos.`);
    } catch (error) {
        console.error('Erro ao remover livro dos favoritos:', error);
    }
}

export { getfavoritos, postFavorito, deleteFavorito };
