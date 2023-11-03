import { TwoColumns } from '../../../components/TwoColumns';
import { Markdown, Slide, SlideTitle } from "../../../components";

const pros = `
#### Pros
* The simplest API - no wrappers 
`;
const cons = `
#### Cons
* Hard to track flow of execution
* Testing may require mocking other callbacks
`;

export const CallbacksOutro = () => (
  <Slide>
    <SlideTitle>Callbacks</SlideTitle>
    <TwoColumns
      left={<Markdown>{pros}</Markdown>}
      right={<Markdown>{cons}</Markdown>}
    />
  </Slide>
);
