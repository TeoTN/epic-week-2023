import dedent from "dedent";
import { Container, Markdown, Slide, SlideTitle } from "../../components";

const notes = `
Let's have an overview of what we'll talk about in this talk. We'll start with
the basics, learning what is asynchronous code and how it works.

We'll also have a look at a few practical examples, which will help you write
asynchronous code efficiently.

Next, we'll make a deep dive into javascript engine, on the example of V8, and
we'll see how it handles asynchrony.

Finally, we'll learn how promises work by implementing a home-baked Promise
class.
➡️
`;

export const Agenda = () => (
  <Slide notes={notes}>
    <SlideTitle>Agenda</SlideTitle>
    <Container>
      <Markdown>
        {dedent`
      * What does it mean to be asynchronous?
      * Practical examples
      * Deep-dive into JS Engine
      * Home-baked Promise implementation
      `}
      </Markdown>
    </Container>
  </Slide>
);
