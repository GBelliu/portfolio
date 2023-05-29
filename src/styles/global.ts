import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
  }
  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }

  .whatsapp_float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 30px;
    right: 30px;
    background-color: #4da735;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;

    z-index: 101;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
    .whatsapp_float {
      bottom: 20px;
      right: 20px;
    }
    .whatsapp-icon {
      margin-top: 10px;
    }
  }
`;
