import React from 'react';
import { Container } from './styles';

interface BannerPorjetoProps {
  title: string;
  type: string;
  imgUrl: string;
}

export default function BannerProjejto({
  title,
  type,
  imgUrl
}: BannerPorjetoProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}
