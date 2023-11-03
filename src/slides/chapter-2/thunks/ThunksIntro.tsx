import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const notes = `
While thunks are not an inherent part of programming language like Promises or
generators, they're an important pattern used in asynchronous programming.  

Some of you might be already familiar with the idea, as it was popularized by 
redux-thunk library.
`;

export const ThunksIntro = () => (
  <Slide>
    <SlideTitle>Thunks</SlideTitle>
    <Notes><Markdown>{notes}</Markdown></Notes>
  </Slide>
);
