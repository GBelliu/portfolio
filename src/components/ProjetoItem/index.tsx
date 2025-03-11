import React from 'react';
import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export default function ProjetoItem({
  title,
  type,
  imgUrl,
  slug
}: ProjetoItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </>
      </Link>
    </Container>
  );
}
