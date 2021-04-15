import '../styles/globals.css';
import Home from './home';
import { ThemeProvider } from 'styled-components';
import theme from 'themes';

function MyApp({ pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Home {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
