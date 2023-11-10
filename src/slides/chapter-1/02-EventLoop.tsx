import dedent from "dedent";
import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";

const notes = `
You might be wondering, how your web browser achieves asynchronous behaviour?

To do this, it relies on the concept of event loop. The browser will run over
the event loop in cycles, processing various steps as it goes.

One key step in event loop is processing tasks. You might wonder, what is a
task? There are a few key tasks, namely your JavaScript code loaded with script
tag, as well as callbacks scheduled with setTimeout or setInterval APIs. Another
example of a task is a DOM event, like a click or keyboard typing.

In each run of the event loop, tasks will be taken from the queue and executed.
If a task results in scheduling another task, it won't be executed until another
run of the event loop.

Apart from that, there's a mechanism called microtasks, which are executed at the
end of single event loop iteration. They are the mechanism used by promises, and
are slightly different in that they are run until the queue is empty, so if
microtask schedules another microtask, it will get executed as well.

Finally, there are some other steps that are part of the event loop like
functions scheduled with request animation frame, or all the work that is required
to render your page. They are re-run only when needed and might not be a part of
each interation.
`;

export const EventLoop = () => {
  return (
    <>
      <Slide>
        <SlideTitle>Event Loop</SlideTitle>
        <Markdown>
          {dedent`
            * Synchronous tasks - e.g. <script> tag loaded
            * Asynchronous tasks - \`setTimeout\`, \`setInterval\`, DOM Events
            * Microtasks - \`window.queueMicrotask\`, \`Promise.prototype.then\`, \`Promise.prototype.catch\`
            * \`requestAnimationFrame\`
            * Styles recalculating, layout, paint
          `}
        </Markdown>
        <Notes>
          <Markdown>{notes}</Markdown>
        </Notes>
      </Slide>
    </>
  );
};
