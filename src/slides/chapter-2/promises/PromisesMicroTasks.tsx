import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const snippet = `
~~~js
setTimeout(() => {
  Promise.resolve().then(() => console.log('Promise 1'));
  console.log('Timeout 1');
}, 1000);

setTimeout(() => {
  Promise.resolve().then(() => console.log('Promise 2'));
  console.log('Timeout 2');
}, 1000);
~~~
`;

const notes = `
As we discussed earlier, the runtime environment is made of a few building pieces
including Javascript Engine, task queue, APIs, and event loop.
Can you tell in what order the messages will be printed when this code is
executed?

[Poll](https://app.sli.do/event/xykxgzgh)
[Admin](https://admin.sli.do/event/xykxgzgh/polls) 
[Live](https://wall.sli.do/event/xykxgzgh?section=57547dc8-3de1-4bc7-ac46-17e5ea79c5b2)

There's however one detail I skipped, that is microtask queue. Promises rely on
another queue of tasks, that gets pulled from more frequently, that is everytime
the call stack gets emptied. On the other hand, the task queue is only pulled 
from once in every event loop run.
`;

export const PromisesMicroTasks = () => (
  <Slide>
    <SlideTitle subtitle="Quiz">Promises</SlideTitle>
    <Markdown>{snippet}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
