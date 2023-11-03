import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from "../../../components/Notes";

const snippet = `
~~~js
async function primitiveValue() {
  const value = await 17;
  return value;
}

primitiveValue()
  .then(console.log);
// 17

~~~
`;

const notes = `
Before we dive deeper, let's have a look at this example. Firstly, as the value
returned by async function is a promise, we can mix the syntax and handle it the
way we did with promises.

Another tiny detail here is that await keyword can be used with primitive values
although it simply uses the value and does nothing interesting with it.
`;

export const AsyncAwaitMixAndMatch = () => (
  <Slide>
    <SlideTitle subtitle="Return type">Async / Await syntax</SlideTitle>
    <Markdown id="async-await-returnType">
      {snippet}
    </Markdown>
  </Slide>
);
