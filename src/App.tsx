import { useEffect } from "react";
import Reveal from "reveal.js";
import { ThemeProvider } from "styled-components";
import { SlidesDeck } from "./components";
import { revealConfig } from "./reveal.config";
import { Chapter1, Outro, Intro } from "./slides";
import { theme } from "./theme";

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
          <Intro />
          <Chapter1 />
          <Outro />
        </SlidesDeck>
      </div>
    </ThemeProvider>
  );
};

export default App;
