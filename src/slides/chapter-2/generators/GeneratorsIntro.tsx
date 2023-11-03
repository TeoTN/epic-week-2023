import { SectionTitleSlide } from '../../../components';

const notes = `
Generators are yet another concept that is often used to facilitate working with
asynchronous code. Similarly to the async/await syntax, they do not exhibit the
run to completion behaviour, and can be paused in the middle, yielding control
back to the main thread, so that another piece of code may run. 
`;

export const GeneratorsIntro = () => (
  <SectionTitleSlide title="Generators" notes={notes} />
);
