import { Markdown, Slide, SlideTitle } from '../../../components';
import { VisualRuntime } from '../../../components/visual-runtime';
import { Notes } from '../../../components/Notes';
import {
  apiCall,
  compose,
  microTask,
  popStack,
  pushLine,
  pushStack,
  repeat,
  SideEffect,
  task,
} from '../../../components/visual-runtime/effects';

const snippet = `
~~~js
setTimeout(function callback() {
  Promise.resolve().then(() => {
    console.log('Microtask 1');
  });
  console.log('Listener 1');
}, 1000);

~~~
`;

const playbook: SideEffect[] = [
  compose(pushStack('main', { args: [], ln: 0, handler: 'main' }), pushLine(1)),
  compose(
    pushStack('setTimeout', {
      ln: 1,
      args: ['callback', 1000],
      handler: 'stack.timeout',
    }),
    repeat(pushLine, { times: 5 }),
  ),
  apiCall('Timer API', { handler: 'api.timer' }),
  compose(
    popStack('api.timer'),
    task('timer', 0, { handler: 'task.timer' }),
    pushLine(),
  ),
  compose(popStack('api.timer'), popStack('stack.timeout'), popStack('main')),
  compose(
    pushStack('callback', { handler: 'stack.callback', args: [], ln: 1 }),
    pushLine(2),
    popStack('task.timer'),
  ),
  compose(
    pushStack('Promise.then', {
      ln: 2,
      args: ['anonymous Fn'],
      handler: 'stack.promise-then',
    }),
    microTask('anonymous Fn', { handler: 'microtask.promise-then' }),
  ),
  compose(popStack('stack.promise-then'), repeat(pushLine, { times: 3 })),
  pushStack('console.log', {
    args: ['Listener 1'],
    ln: 4,
    handler: 'stack.log:listener',
  }),
  compose(popStack('stack.log:listener'), popStack('stack.callback')),
  compose(
    popStack('microtask.promise-then'),
    pushStack('anonymous Fn', {
      args: [],
      ln: 3,
      handler: 'stack.anonymous',
    }),
    pushLine(3),
  ),
  pushStack('console.log', {
    args: ['Microtask 1'],
    ln: 3,
    handler: 'stack.log:microtask',
  }),
  compose(popStack('stack.log:microtask'), popStack('stack.anonymous')),
];

const notes = `
Let's see how this works in practice on a simpler example with just the single
timeout. **NEXT**

Initially, the global scope is executed, and we start with interpreting the first
line - which is a call to setTimeout.**NEXT**

The setTimeout is added to the call stack, and two arguments are passed to it -
 the function callback and timeout value.**NEXT**

It results in a call to Timer API that is available both in the web browser and 
node.js environment. **NEXT**

After a second has passed, the timer adds a task to the queue that will be 
executed in the next cycle of event loop. **NEXT**

Now as we return from setTimeout function, we've finished processing our snippet
and the call stack gets emptied. **NEXT**

As the event loop has finished its cycle, it may now pick up a task from the 
queue, which is the callback we scheduled earlier. **NEXT**

The promise was immediately resolved, so the registered callback is added to the
microtask queue. **NEXT**

We proceed to the next statement in the callback function, which is the 
console.log **NEXT**

The console log is put onto the stack, printing out "Listener 1" phrase. **NEXT**

Next, the console.log is taken from the stack, and since this was the end of the
callback, it's also removed from the stack. **NEXT**

Now, since the call stack is empty, even though the event loop cycle might have 
not finished, we immediately pull all tasks from the microtask queue. Even if they
created new microtasks, they would be pulled as well. This results in adding our
anonymous arrow function to the stack **NEXT**

As a result we invoke another console.log, this time with "Microtask 1" - that's
 printed in the console.**NEXT**
 
And that finishes a the second event loop cycle.
`;

export const PromisesMicroTaskVisualization = () => {
  return (
    <Slide>
      <SlideTitle>Promises</SlideTitle>
      <VisualRuntime
        playbook={playbook}
        snippet={snippet}
        showApiCalls
        showTasks
        showMicroTasks
      />
      <Notes>
        <Markdown>{notes}</Markdown>
      </Notes>
    </Slide>
  );
};
