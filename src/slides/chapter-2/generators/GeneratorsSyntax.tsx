import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const snippet = `
~~~js
function* simpleCounter() {
  let counter = 0;
  console.log('START');
  while (true) {
    yield ++counter;
  };
}

const iterator = simpleCounter();

console.log(iterator.next()); // START; {value: 1, done: false}
console.log(iterator.next()); // Returned: {value: 2, done: false}
console.log(iterator.next()); // Returned: {value: 3, done: false}
~~~
`;

const notes = `
Let's have a look at the example. Firstly, the generator is different from 
other functions in that it has star between the function keyword and the 
identifier of that function.

When the generator function is called, it returns an iterator. It's worth noting
however, that it will not be started until we start iterating over the values of
the iterator using next method. It might be counterintuitive, but the line #9 
won't actually cause "START" to be printed out in the console, it will only get
printed after the first call of next function.

The generator function gets paused on every occurrence of yield keyword, and will
only be resumed when the iterator's next method is called. Because of that, even
though we have an infinite loop in the function, it won't block the main thread,
at least unless we create another infinite loop that will try to exhaust all 
values of that iterator.   
`

export const GeneratorsSyntax = () => (
  <Slide>
    <SlideTitle>Generators</SlideTitle>
    <Markdown>{snippet}</Markdown>
    <Notes><Markdown>{notes}</Markdown></Notes>
  </Slide>
)