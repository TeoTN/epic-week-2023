import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";

const snippet1 = `
~~~js
const getDeferred = () => {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}

const { promise, resolve, reject } = getDeferred();
resolve(5);
~~~
`;

const notes = `
Another recipe worth adding to your bag of tricks is deferred objects. In this
snippet of code you can see an example implementation. Allows you to create a
pending promise, and control when it gets fulfilled outside of the function
passed to the Promise constructor.

It's quite useful pattern that allows you to encapsulate powerful logic without
having the constructor run for many lines of code, and it can oftentimes improve
the legibility of the code.
⬇️
`;

export const DeferredObject = () => (
  <Slide>
    <SlideTitle subtitle="Deferred Object">
      Practical Examples
    </SlideTitle>
    <Markdown>{snippet1}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
