import { SectionTitleSlide } from "../../components";

const notes = `
As we navigate this landscape it might be worthwhile having a look at a few
practical examples of how to work with asynchrous code.

⬇️
`;

export const PracticalExamples = () => (
  <SectionTitleSlide
    title="Practical examples"
    notes={notes}
  />
);

/*
new Promise vs Promise.then
new Promise(infinite loop)
Promise.resolve().then(infinite loop)
Promise.resolve().then(() => self) // infinite loop
Promise.then(() => promise)
const delay = ms => new Promise(res => setTimeout(res, ms));
deferred object
async/await -> await creates microtasks
*/
