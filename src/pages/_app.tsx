import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { BsWhatsapp } from 'react-icons/bs';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-P6VLS24' });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />

      <Toaster position="top-right" />
      <Component {...pageProps} />
      <GlobalStyles />
      <a
        href="https://wa.me/5519999900511?text=Ol%C3%A1%21+Tudo+bem%3F"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
      >
        <BsWhatsapp size={24} />
      </a>
    </ThemeProvider>
  );
}

export default MyApp;
