import { SectionTitleSlide, Slide } from "../../components";
import { AsyncExample } from "./02-AsyncExample";
import { CallStack } from "./01-CallStack";
import { PromiseImplementation } from "./03-PromiseImplementation";

const notes = `
Now that we have some grasp of how to use promises, let's make a deep dive
into how they work in the web browser, and implement an approximation of
a Promise class.

---
This part may slightly exceed the planned talk time by about 5 minutes, so please
feel free to leave if needed and watch the recording later if you can't stay a bit longer.

Regardless please remember to leave some feedback in the dedicated Slack
channel afterwards, I will also post a google form after the talk to collect your feedback.
⬇️
`;

export const Chapter2 = () => (
  <Slide>
    <SectionTitleSlide title="Deep dive" notes={notes} />
    <CallStack />
    <AsyncExample />
    <PromiseImplementation />
  </Slide>
);
