import React from 'react';
import { Header } from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://i.pinimg.com/originals/3c/77/39/3c773906ccfbb353bb1cad43a8eda8ca.png"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://i.pinimg.com/originals/3c/77/39/3c773906ccfbb353bb1cad43a8eda8ca.png"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://i.pinimg.com/originals/3c/77/39/3c773906ccfbb353bb1cad43a8eda8ca.png"
        />
        <ProjetoItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://i.pinimg.com/originals/3c/77/39/3c773906ccfbb353bb1cad43a8eda8ca.png"
        />
      </main>
    </ProjetosContainer>
  );
}
