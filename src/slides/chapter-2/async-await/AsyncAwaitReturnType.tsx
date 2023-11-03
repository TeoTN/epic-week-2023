import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from "../../../components/Notes";

const snippet1 = `
~~~js
async function primitiveValue() {
  return 17;
}
~~~
`;

const snippet2 = `
~~~js
async function primitiveValue() {
  return 17;
}

primitiveValue() instanceof Promise;
// true
~~~
`;

const notes1 = `
With the ECMAScript 6 released over 6 years ago in 2015, the async/await syntax
was introduced to JavaScript world. The syntax allows adding a special keyword
async before function declaration. This changes the behaviour of a function -
the function will always return a promise. It also enables use of await keyword
within that function, that we'll have a look at in a moment. **NEXT**
`;

const notes2 = `
The behaviour of an async function is that if the underlying function returns a
primitive value, like 17, it will be wrapped in an immediately resolved promise,
just like if you would call Promise[dot]resolve with 17.
However, if the returned object is a promise, it's not wrapped but instead it is
returned as the return value from that async function. 
`;

export const AsyncAwaitReturnType = () => (
  <>
  <Slide>
    <SlideTitle subtitle="Return type">Async / Await syntax</SlideTitle>
    <Markdown id="async-await-returnType">
      {snippet1}
    </Markdown>
    <Notes>
      <Markdown>{notes1}</Markdown>
    </Notes>
  </Slide>
    <Slide>
      <SlideTitle subtitle="Return type">Async / Await syntax</SlideTitle>
      <Markdown id="async-await-returnType">
        {snippet2}
      </Markdown>
      <Notes>
        <Markdown>{notes2}</Markdown>
      </Notes>
    </Slide>
  </>
);
