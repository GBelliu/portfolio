import React from 'react';
import { Container } from './styles';
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { RiTwitchFill } from 'react-icons/ri';
export default function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/GBelliu')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://linkedin.com')}
          />
          <AiFillInstagram
            onClick={() =>
              handleRedirect('https://www.instagram.com/gui_bellissimo/')
            }
          />
          <RiTwitchFill
            onClick={() => handleRedirect('https://www.twitch.tv/gbelliu')}
          />
        </section>
      </div>
    </Container>
  );
}
