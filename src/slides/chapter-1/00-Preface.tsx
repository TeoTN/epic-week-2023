import { SectionTitleSlide } from "../../components";

const notes = `
Before we start our journey, we need to agree on a few basic terms, so that
it's easier to navigate this landscape.

For starters, you might be wondering what does it mean for something to be asynchronous?
Let me try to explain: typically, you expect your code to be executed roughly line by line
in the order of execution.

We talk about asynchrony, when a programming language allows you to execute function out of order,
in response to some future event, like user interactions or time elapsing. This creates a perceived
gap between code that runs now, and code that is scheduled to run later. ⬇️
`;

export const Preface = () => (
  <SectionTitleSlide
    title="What does it mean to be asynchronous?"
    notes={notes}
  />
);
