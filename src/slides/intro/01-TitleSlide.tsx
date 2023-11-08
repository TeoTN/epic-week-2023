import { Markdown, TitlePage } from "../../components";
import { Notes } from "../../components/Notes";

const notes = `
Hello everyone! Welcome to my talk, my name is Piotr Staniów, and today you'll hear from me about
promises and asynchronous programming in JavaScript.

This talk is one of two parts, the other part will be hosted by Duncan Walter on Thursday,
and I encourage you to join that part as well. It will touch on a similar subject but will
focus on a completely different area of handling errors in asynchronous context.

For both our talks there's a Slack channel, it's shown in this slide and is linked to from the
calendar invite you got.

I'd love to hear from you, also after the talk, and even before the talk even starts please feel
free to hop into that channel and let everyone know what made you enroll on this particular talk,
and what do you hope to learn from it.
`;

export const TitleSlide = () => (
  <TitlePage
    title="Promises, Async, and Beyond"
    subtitle="Control Over Time"
    author="Piotr Staniów"
    footer={
      <>
        <span>
          Slack: <i>#epicweek2023-promises-async-and-beyond</i>
        </span>
        <Notes>
          <Markdown>{notes}</Markdown>
        </Notes>
      </>
    }
  />
);
