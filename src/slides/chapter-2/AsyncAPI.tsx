import { Markdown, Slide } from '../../components';

const body = `
## Asynchronous APIs

* ### Callbacks
* Promises
* Async/Await
* Thunks
* Generators
* Observables
* Communicating Sequential Processes (CSP)
`;

export const AsyncAPI = () => (
  <Slide>
    <Markdown>{body}</Markdown>
  </Slide>
);
