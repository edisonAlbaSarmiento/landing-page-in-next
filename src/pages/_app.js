import '../styles/globals.css';
import Home from './home';
import Contact from './contact';

import { ThemeProvider } from 'styled-components';
import theme from 'themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Home {...pageProps} />;
      <Contact />
    </ThemeProvider>
  );
}

export default MyApp;
