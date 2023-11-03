import { SectionTitleSlide } from '../../../components';

const notes = `
Communicating Sequential Processes (in short CSP), are also not a language 
feature but they are an important pattern that helps us to handle asynchrony.
`;

export const CSPIntro = () => (
  <SectionTitleSlide title="Communicating Sequential Processes (CSP)" notes={notes} />
);
