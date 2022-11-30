import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/foto.png';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Guilherme" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Guilherme</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Guilherme,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Bellissimo Barbosa,</span>
            </div>
            <div>
              Idade: <span className="blue">19 anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Desenvolvedor Web Front-end,</span>
            </div>
            <div>
              Empresa: <span className="blue">Agência RosaDV</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
