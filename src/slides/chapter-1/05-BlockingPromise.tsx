import { TwoColumns } from "../../components/TwoColumns";
import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";

const snippet1 = `
~~~js
(() => {
  console.log('Before');
  new Promise(() => console.log('Inside'));
  console.log('After');
})();
~~~
`;

const snippet2 = `
~~~js
(() => {
  console.log('Before')
  Promise.resolve().then(() => {
    console.log('Inside');
  });
  console.log('After');
})();
~~~
`;

const notes = `
In the first example The constructor of a promise is called immediatelly and
it's not queued up as a microtask. In this case, the output is printed to the
console in the order it appears in the code. It's worth remembering that, were
you to put an intensive task into that constructor, it'd block the code execution.

However, in the latter example the output would be Before, After, Inside, since
the promise's callbacks are always scheduled as microtasks and thus asynchronous.
⬇️
`;

export const BlockingPromise = () => (
  <Slide>
    <SlideTitle subtitle="Synchronous constructor">
      Practical Examples
    </SlideTitle>
    <TwoColumns
      left={<Markdown>{snippet1}</Markdown>}
      right={<Markdown>{snippet2}</Markdown>}
    />
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
