import { TwoColumns } from '../../../components/TwoColumns';
import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const pros = `
#### Pros
* Better performance than promises
* Solves the callback hell
* Deferred execution
`;
const cons = `
#### Cons
* Still relies on Promises - has its limitations
`;

export const AsyncAwaitOutro = () => (
  <Slide>
    <SlideTitle>Async / Await syntax</SlideTitle>
    <TwoColumns
      left={<Markdown>{pros}</Markdown>}
      right={<Markdown>{cons}</Markdown>}
    />
    <Notes>
      <ul>
        <li>Async await syntax has better performance.</li>
        <li>
          In case of promises, the browser has to attach call a copy of call
          stack to them, because before the promise is fulfilled the call stack
          will have been emptied.
        </li>
        <li>
          Async/await is actually pausing the execution of a function, so the
          call stack is not emptied
        </li>
        <li>
          The syntax is mostly (but not completely) syntactic sugar for
          Promises, so it shares its limitations, like lack of cancellation or
          support for single value only
        </li>
      </ul>
    </Notes>
  </Slide>
);
