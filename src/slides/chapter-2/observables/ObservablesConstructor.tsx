import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const notes = `
Similarly to promises, observables exhibit some dualism in their API - the below
is how you can create an observable from scratch, using the constructor.

Observables in their concept are made to be connected to a stream of events, so
in this example I'm using an abstract data source, that could be thought of to be,
for example, websocket data stream. 
`;

const snippet = `
~~~js
import { Observable } from 'rxjs';

const observable$ = new Observable((observer) => {
  const dataSource = new DataSource();
  dataSource.on('data', (chunk) => observer.next(chunk));
  dataSource.on('error', (error) => observer.error(error));
  dataSource.on('complete', () => observer.complete());
  return function finally() {
    dataSource.destroy();
  };
});
~~~
`

export const ObservablesConstructor = () => (
  <Slide>
    <SlideTitle>Observables</SlideTitle>
    <Markdown>
      {snippet}
    </Markdown>
    <Notes><Markdown>{notes}</Markdown></Notes>
  </Slide>
);
