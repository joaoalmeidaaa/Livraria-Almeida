// Pesquisa.js

import React, { useState, useEffect } from 'react';
import { getLivros } from '../../servicos/livros';
import { postFavorito } from '../../servicos/favoritos';
import Input from '../Input';
import styled from 'styled-components';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Resultado = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        margin-left: 10px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livrosAPI, setLivrosAPI] = useState([]);

    useEffect(() => {
        async function fetchLivros() {
            try {
                const livrosDaAPI = await getLivros();
                console.log('Livros obtidos:', livrosDaAPI); // Verificar se os livros estão sendo obtidos corretamente
                setLivrosAPI(livrosDaAPI);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        }
        fetchLivros();
    }, []);




async function insertFavorito(id) {
    await postFavorito(id)
    alert(`Livro de id:${id} inserido!`)
}



    const handleInputChange = (event) => {
        const textoDigitado = event.target.value.toLowerCase();
        console.log('Texto digitado:', textoDigitado);
    
        if (livrosAPI) {
            const resultadoPesquisa = livrosAPI.filter((livro) =>
                livro.nome.toLowerCase().includes(textoDigitado)
            );
            console.log('Resultado da pesquisa:', resultadoPesquisa);
            setLivrosPesquisados(resultadoPesquisa);
        }
    };
    

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={handleInputChange}
            />
           

{ livrosPesquisados.map( livro => (
    <Resultado onClick={() => insertFavorito(livro.id)}>
        <img src={livro.src}/>
        <p>{livro.nome}</p>
    </Resultado>

            ))}
        </PesquisaContainer>
    );
}

export default Pesquisa;
