import { TwoColumns } from '../../../components/TwoColumns';
import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const pros = `
#### Pros
* Can deal with multiple values
* Start/stop mechanism
* Readable sync-like syntax, solves callback hell and inversion of control
* Easy to write unit tests
`;
const cons = `
#### Cons
* Difficult to comprehend all nuances
`;

const notes = `
Generators are in general very powerful syntax, that allows us to handle multiple
values arriving over time. It's also quite convenient that we have control over
when the next step will be made, because of the pausing semantics of generator.

Similarly to async/await syntax, they can be appreciated for synchronous-looking
syntax, that is easier to read and reason about. Finally, testing them is 
relatively easy, since it is sufficient to iterate over all values, and compare if
each step has yielded the expected value. 
In fact, generators allow us to implement lightweight threads-like semantic 
inside JavaScript.  

What might be a bit of a downside here is that as they are quite powerful, they
might be also difficult to comprehend, and understanding them in-depth requires
some time, and knowledge about iterators or async iterators, symbols, or how to 
delegate generators with yield star operator.
`;

export const GeneratorsOutro = () => (
  <Slide>
    <SlideTitle>Generators</SlideTitle>
    <TwoColumns
      left={<Markdown>{pros}</Markdown>}
      right={<Markdown>{cons}</Markdown>}
    />
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
