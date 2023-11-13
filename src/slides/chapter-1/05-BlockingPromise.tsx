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
We mentioned earlier that promises are a way to write asynchronous code, and to
schedule a microtask. However, the mere act of creating a promise instance does
not involve creating a microtask!

In the first example, the constructor of promise is called immediatelly and the
action doesn't get queued up as a microtask. In this case, the output is printed
in the console in the order it appears in the code. It's worth remembering that,
were you to put an intensive task into that constructor, it'd block the code
execution.

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
