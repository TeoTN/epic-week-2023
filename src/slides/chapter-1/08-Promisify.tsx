import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";

const snippet1 = `
~~~js
const delay = (milliseconds) =>
  new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
~~~
`;

const notes = `
As we have learned earlier, the promise constructor per se is synchronous, so we
don't frequently use it to get a promise. It's far more often that there's a
native Web API which returns a promise object for us.

However, one of the use cases for it is to promisify existing API that relies
on callbacks, like in this example. It's possible to expose the resolve function
that is passed from the constructor, for instancy by passing it to another function.

⬇️
`;

export const Promisify = () => (
  <Slide>
    <SlideTitle subtitle="Promisifying a callback-based API">
      Practical Examples
    </SlideTitle>
    <Markdown>{snippet1}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
