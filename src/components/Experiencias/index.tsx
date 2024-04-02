import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="03 anos" description="de experiência" />
      <section>
        <ExperienciaItem
          year="2021"
          title="Estagiário de Dev Web"
          description="Elaboração de projetos, atuando com a área de front-end, utilizando HTML, CSS, JS e frameworks como o Tailwind, ligado ao CSS, e o Blade, ligado ao PHP."
        />
        <ExperienciaItem
          year="2021 - 2022"
          title="Assistente de Mkt & Dev Front-end"
          description="Acompanhamento de campanhas do Google ADS e relatórios do Google Analytics e criação de Landing Pages com React.js e Next.js"
        />
        <ExperienciaItem
          year="2022"
          title="Dev Front-end"
          description="Projeto de uma ferramenta de automatização do fluxo de atendimento e venda, com React.js, Redux, TypeScript, Bootstrap e outras tecnologias"
        />
        <ExperienciaItem
          year="2022 - 2023"
          title="Dev Front-end"
          description="Criação e gerenciamento de protótipos (Figma), e sites (React.js | Next.js | WordPress) para clientes da agência."
        />
        <ExperienciaItem
          year="2024"
          title="Dev Web"
          description="Desenvolvimento de sites usando React.js, Next.js e TypeScript para empresas do Grupo MNGT"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
