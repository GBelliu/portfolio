import React from 'react';
import BannerProjejto from '../../../components/BannerProjeto';
import { Header } from '../../../components/Header';

import { ProjetoContainer } from '../../../styles/ProjetoStyles';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjejto
        title="Porjeto 01"
        type="Website"
        imgUrl="https://i.pinimg.com/originals/3c/77/39/3c773906ccfbb353bb1cad43a8eda8ca.png"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam
          eveniet expedita. Molestiae et ipsa sit asperiores. Hic, ipsum!
          Perferendis accusantium fugit consequatur? Error nesciunt delectus
          eaque distinctio reiciendis et eum neque quia. In saepe tempore
          provident amet, ullam placeat? Ut aliquid culpa error doloribus
          voluptates voluptatem, quo in sit dolorem doloremque! Neque nam eos
          saepe nihil quibusdam officiis aperiam, magni alias deleniti atque.
          Reiciendis et nemo similique velit possimus laboriosam assumenda,
          veritatis temporibus ipsum fugiat, distinctio sequi saepe vero?
        </p>

        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
