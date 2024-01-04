import { livros } from "./DadosUltimosLancamentos";
import styled from 'styled-components';
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

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor='#EB9B00' alinhamento='center' tamanhoFonte='36px'>
        Ultimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img
            key={livro.id} // Certifique-se de usar uma chave única ao mapear elementos em uma lista
            src={livro.src}
            alt={livro.nome}
            style={{ height: '220px', width: '160px', margin: '70px 0' }}
          />
        ))}
      </NovosLivrosContainer>
      <CardRecomendacao
        titulo='TALVEZ VOCE SE INTERESSE POR...'
        subtitulo='Como conseguir seu primeiro emprego'
        descricao='Saiba mais '
        img={imagemLivros} // Corrigindo a propriedade img aqui
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;