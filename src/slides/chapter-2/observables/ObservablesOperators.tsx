import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const notes = `
What is interesting however, is that RxJS provides a lot of functions that allow
us to convert commonly used data sources like promises, arrays, iterable objects,
or events, into observables.

One mental model to think about observables, is that they are something like an
array of values which are arriving over time. Similar to arrays, we can apply
various transformations to observables, for instance applying map, filter or reduce
operations. In fact, there are dozens of such operators, some of them are higher
order operators that can map one observable into another ones, combining them
together.

The example in this slide transforms a stream of change events on an input element
on a website, into an observable. This observable, is transforming values that 
arrive over time, into responses from server for each value we typed into that
input.

What's interesting here, is that it took us a single line of code to ensure that
if user is typing fast, values are only taken every one hundred fifty milliseconds.
`;

const snippet = `
~~~js
const results = document.querySelector('pre#results');
const input = document.querySelector('input');

const inputTyping$ = fromEvent(input, 'change');

inputTyping$
  .pipe(
    debounce(150),
    map((event) => event.target.value),
    switchMap(value => from(fetch(\`/search?input=\${value}\`))), 
  )
  .subscribe(searchResults => {
    results.innerText = searchResults;
  });
~~~
`

export const ObservablesOperators = () => (
  <Slide>
    <SlideTitle>Observables</SlideTitle>
    <Markdown>{snippet}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
