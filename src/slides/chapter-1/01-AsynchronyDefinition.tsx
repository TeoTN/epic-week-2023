import dedent from "dedent";
import { Container, Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";
import { RichCode } from "../../components/RichCode";

const notes = `
This example illustrates asynchronous behaviour, and crucially, it shows two different mechanisms
behind asynchrony in a JavaScript engine like V8.

The code gets executed line by line, so we first output "Synchronous muffin" to the console.

Subsequently, we call setTimeout function, passing to it a function that doesn't get executed
immediatelly. This function, will only run after a delay, so we say that it's asynchronous.

Next, we create an immediatelly resolved promise, and schedule a callback for it to be called
which will output "Asynchronous microtask candy". However, callbacks scheduled with Promise's
"then" are always asynchronous.

Finally we get to the last statement, outputting "Synchronous avocado". Now is a time, when our
script has finished running, and we can start executing asynchronous code.

Firstly, we run all microtasks, which are scheduled with promises. Next, we run all asynchronous
tasks like the ones created with set timeout, or events like mouse clicks.

We'll get back to that in a moment.

⬇️`;

export const AsynchronyDefinition = () => (
  <Slide>
    <SlideTitle component="h2">
      What does it mean to be asynchronous?
    </SlideTitle>
    <Container>
      <RichCode className="language-js" customStyle={{ fontSize: "1rem" }}>
        {dedent`
        console.log('Synchronous 🧁');

        setTimeout(() => console.log('Asynchronous task 🍰'), 0);

        Promise.resolve()
          .then(() => console.log('Asynchronous microtask 🍬'));

        console.log('Synchronous 🥑');
      `}
      </RichCode>

      <RichCode className="language-js" customStyle={{ fontSize: "1rem" }}>
        {dedent`
        // Console:
        "Synchronous 🧁"

        "Synchronous 🥑"

        "Asynchronous microtask 🍬"

        "Asynchronous task 🍰"

      `}
      </RichCode>
    </Container>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
