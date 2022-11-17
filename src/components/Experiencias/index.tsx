import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="03 anos" description="de experiência" />
      <section>
        <ExperienciaItem
          year="2020"
          title="Dev Front-end"
          description="Teste de site e portfolio, testando os conteudos e layout do site"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Front-end"
          description="Teste de site e portfolio, testando os conteudos e layout do site"
        />
        <ExperienciaItem
          year="2022"
          title="Dev Front-end"
          description="Teste de site e portfolio, testando os conteudos e layout do site"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
