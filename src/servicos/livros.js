import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" });


async function getLivros() {
    try {
        const response = await livrosAPI.get('/');
        const livros = response.data;
        console.log("Livros obtidos:", livros); // Adicione esta linha para verificar os livros obtidos da API
        return livros;
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        return [];
    }
}

export { getLivros };
