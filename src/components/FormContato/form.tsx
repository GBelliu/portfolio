import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import emailjs from '@emailjs/browser';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';
export default function Form() {
  interface FormProps {
    nome: string;
    email: string;
    mensagem: string;
  }

  const [data, setData] = useState<FormProps>({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!data.nome || !data.email) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      setLoading(false);
      return;
    }
    emailjs
      .send(
        'service_jlddjq7',
        'template_tnk82jb',
        data as any,
        'AY1mdPFklc7lvR3vO'
      )
      .then(
        result => {
          toast('Mensagem enviado com sucesso!', {
            style: {
              background: theme.secondary,
              color: '#fff'
            }
          });

          setLoading(false);
        },
        error => {
          toast(
            'Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente',
            {
              style: {
                background: theme.error,
                color: '#fff'
              }
            }
          );
          setLoading(false);
        }
      );
  };

  return (
    <FormContainer data-aos="fade-up" ref={form} onSubmit={sendEmail}>
      <Input
        placeholder="Nome"
        value={data.nome}
        onChange={e => setData({ ...data, nome: e.target.value })}
      />
      <Input
        placeholder="E-mail"
        value={data.email}
        onChange={e => setData({ ...data, email: e.target.value })}
      />
      <TextArea
        placeholder="Mensagem"
        value={data.mensagem}
        onChange={e => setData({ ...data, mensagem: e.target.value })}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}
