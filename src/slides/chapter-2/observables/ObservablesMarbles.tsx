import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';
import rxjsMarbles from '../../../assets/rxjs-marbles.png';

const notes = `
If you are curious how a particular operator works in RxJS, there's an excellent
website that helps you understand it visually, that is rxmarbles[dot]com.

Below is one example that shows how merge operator allows us to merge values
arriving over time from two observables into a single, new observable,
interlacing their values.

This concept is prevalent when talking about observables, and it is possible to
write unit tests for them which are also expressed visually using ASCII diagrams.
`;

export const ObservablesMarbles = () => (
  <Slide>
    <SlideTitle subtitle="Source: https://rxmarbles.com/">Observables</SlideTitle>
    <div>
      <img src={rxjsMarbles} alt="RxJS Marbles diagram" />
    </div>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
