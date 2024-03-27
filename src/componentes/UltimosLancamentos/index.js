import React from 'react';
import { livros } from "./DadosUltimosLancamentos";
import styled, { keyframes } from 'styled-components';
import { Titulo } from "../Titulos";
import CardRecomendacao from "../CardRecomendacao";
import imagemLivros from '../../imagens/livro6.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

const slideRightLeft = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(20px);
    }
    100% {
        transform: translateX(0);
    }
`;

const LivroImagem = styled.img`
    height: 220px;
    width: 160px;
    margin: 70px 0;
    animation: ${slideRightLeft} 2s infinite ease;

    &:hover {
        transform: scale(1.1);
        animation: none; /* Interrompe a animação ao passar o mouse */
    }
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='#EB9B00' alinhamento='center' tamanhoFonte='36px'>
                Últimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map((livro) => (
                    <LivroImagem
                        key={livro.id}
                        src={livro.src}
                        alt={livro.nome}
                    />
                ))}
            </NovosLivrosContainer>
            <CardRecomendacao
                titulo='Talvez você se interesse por...'
                subtitulo='Como conseguir seu primeiro emprego'
                descricao='Saiba mais'
                img={imagemLivros}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;
