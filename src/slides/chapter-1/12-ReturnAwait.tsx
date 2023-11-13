import { TwoColumns } from "../../components/TwoColumns";
import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";

const preface = `
~~~js
const maybeThrow = () => Promise.reject('Thrown');
~~~
`;

const snippet1 = `
~~~js
async function fn1() {
  try {
    return maybeThrow();
  } catch (e) {
    return 'caught';
  }
}
~~~
`;

const snippet2 = `
~~~js
async function maybeThrow() {
  try {
    return await waitAndMaybeReject();
  } catch (e) {
    return 'caught';
  }
}
~~~
`;

const notes = `
There are two interesting nuances to using return await in your code.
Firstly, it will have a different stack trace then when you don't use it, and
you may want to evaluate which one is more suitable for you.

Secondly, it behaves differently when it's wrapped in the try/catch statement
block. If you think about it carefully, it will make sense but it might not be
immediatelly obvious.

In the first example, we simply call maybeThrow function, and return whatever
it returns. There's no error thrown, since maybeThrow returns a rejected promise.

In the second example however, the await happens before returning the result,
and while it might not be obvious, it is the await that throws an error when it's
followed by rejected promise, rather than the promise itself.
⬇️
`;

export const ReturnAwait = () => (
  <Slide>
    <SlideTitle subtitle="Return & Await">Practical Examples</SlideTitle>
    <Markdown>{preface}</Markdown>
    <TwoColumns
      left={<Markdown>{snippet1}</Markdown>}
      right={<Markdown>{snippet2}</Markdown>}
    />
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
