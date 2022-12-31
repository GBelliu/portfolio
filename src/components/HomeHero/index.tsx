import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/perfila.png';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Guilherme" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Guilherme</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Guilherme,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Bellissimo Barbosa,</span>
            </div>
            <div>
              Idade: <span className="blue">20 anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Web Front-end,</span>
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
