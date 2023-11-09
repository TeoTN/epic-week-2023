import { TwoColumns } from "../../components/TwoColumns";
import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";

const snippet1 = `
~~~js
function fn() {
  setTimeout(fn, 0);
}
fn();
~~~
`;

const snippet2 = `
~~~js
let p = Promise.resolve();
function fn() {
  p = p.then(fn);
}
fn();
~~~
`;

const notes = `
Let's have a look at these two examples. They both present an infinite loop.
In the first case, the page this code runs on won't be blocked. Every time the
fn function runs, it schedules a new task using the setTimeout function.
However, tasks are only queued up and run once every event loop cycle, so it
doesn't block your page, it still can run restyling, painting and layout steps.

In the latter example however, each run of the function fn schedules another
microtask. Microtasks are different from tasks in that if microtask puts another
microtask on the queue, the newly added one will also run in the same step of
the event loop. The microtask queue has to be exhausted before starting another
step of the loop. Which means in this case your page will be frozen, you wouldn't
be able to click on a button on your page, whereas in the former example, the
button would still get click animation.
⬇️
`;

export const ExhaustiveMicrotaskQueue = () => (
  <Slide>
    <SlideTitle subtitle="Microtask Queue - run till exhaustion">
      Practical Examples
    </SlideTitle>
    <TwoColumns
      left={<Markdown>{snippet1}</Markdown>}
      right={<Markdown>{snippet2}</Markdown>}
    />
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
