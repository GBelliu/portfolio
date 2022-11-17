import Link from 'next/link';
import React from 'react';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

export default function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos projetos" />
      <section>
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://i.pinimg.com/originals/3c/77/39/3c773906ccfbb353bb1cad43a8eda8ca.png"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://i.pinimg.com/originals/3c/77/39/3c773906ccfbb353bb1cad43a8eda8ca.png"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://i.pinimg.com/originals/3c/77/39/3c773906ccfbb353bb1cad43a8eda8ca.png"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
