import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";

const snippet1 = `
~~~js
async function fn() {
  return 5;
}

fn().then(console.log);
~~~
`;

const notes = `
JavaScript for a couple of year now has additional syntax that simplifies usage
of promises and allows you to avoid so called callback hell.

It comprises of two parts, adding async keyword before function declaration, be
it a keyword function or arrow function, will make it always return a promise.
If the function would return a primitive value, like in this example, the value
will be wrapped into an immediatelly resolved promise.
If the returned value was a promise, the promise would be returned.

It's worth noting here however, if your promise always returns a promise, and
there's no await, you don't need the async keyword.
⬇️
`;

export const AsyncFn = () => (
  <Slide>
    <SlideTitle subtitle="Async/Await syntax">Practical Examples</SlideTitle>
    <Markdown>{snippet1}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
