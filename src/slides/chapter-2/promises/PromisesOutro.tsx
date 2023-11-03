import { TwoColumns } from '../../../components/TwoColumns';
import { Markdown, Slide, SlideTitle } from "../../../components";

const pros = `
#### Pros
* Easier to track order of execution
* Always asynchronous (microtask)
* Error handling in the API
`;
const cons = `
#### Cons
* Don't really solve the callback hell
* Action is started immediately
`;

export const PromisesOutro = () => (
  <Slide>
    <SlideTitle>Promises</SlideTitle>
    <TwoColumns
      left={<Markdown>{pros}</Markdown>}
      right={<Markdown>{cons}</Markdown>}
    />
  </Slide>
);
