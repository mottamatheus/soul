import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/themes';
import Bubble from '../components/Bubble';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Bubble />
      </ThemeProvider>
      <Component {...pageProps} />

      <GlobalStyle />
    </>
  );
};

export default MyApp;
