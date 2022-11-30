import React from 'react';
import SectionTitle from '../SectionTitle';
import Form from './form';
import { Container } from './styles';

export default function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos <br /> meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que <br /> irei retornar em breve.
          </>
        }
      />
      <Form />
    </Container>
  );
}
