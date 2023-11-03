import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';
import { TwoColumns } from '../../../components/TwoColumns';

const snippet1 = `
~~~js
function* withInput() {
  const input = yield 5;
  console.log(input);
}

const iterator = withInput();

iterator.next();
// { value: 5, done: false }
iterator.next();
// console.log: undefined
// { value: undefined, done: true }
iterator.next();
// { value: undefined, done: true }
~~~
`;
const snippet2 = `
~~~js
function* withInput() {
  const input = yield 5;
  console.log(input);
}

const iterator = withInput();

iterator.next();
// { value: 5, done: false }
iterator.next(10);
// console.log: 10
// { value: undefined, done: true }
iterator.next();
// { value: undefined, done: true }
~~~
`;

const notes = `
What is interesting about the yield operator, is that it both is an equivalent 
of returning a value, and also is waiting for a value to be passed to it.

As you can see here, in the left example, yield 5 is evaluated to undefined,
because the iterator-dot-next was called with no arguments, hence undefined.
In the example to the right however, whatever we pass to the call of next method
will be the value yield evaluates to. One trap here is that the first call of
next method corresponds to the start of the generator, so it's the second call
that sets the value of yield.
`;

export const GeneratorsIngress = () => (
  <Slide>
    <SlideTitle>Generators</SlideTitle>
    <TwoColumns
      left={<Markdown>{snippet1}</Markdown>}
      right={<Markdown>{snippet2}</Markdown>}
    />
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
