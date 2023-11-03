import { SlidesDeck, TitlePage } from './components';
import { Chapter1, Chapter2, Outro } from './slides';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { useEffect } from 'react';
import Reveal from 'reveal.js';
import { revealConfig } from './reveal.config';

export const App = () => {
  useEffect(() => {
    const deck = new Reveal(revealConfig);
    const t = setTimeout(() => deck.initialize(), 0);
    return () => {
      clearTimeout(t);
    };
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <div className="reveal">
        <SlidesDeck>
          <TitlePage
            title="Asynchrony in JS"
            subtitle="Between now and then"
            author="Piotr Staniów"
          />
          <Chapter1 />
          <Chapter2 />
          <Outro />
        </SlidesDeck>
      </div>
    </ThemeProvider>
  );
};

export default App