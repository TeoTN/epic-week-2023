import { Markdown, Slide, SlideTitle } from "../../components";
import { VisualRuntime } from "../../components/visual-runtime";
import { Notes } from "../../components/Notes";
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
} from "../../components/visual-runtime/effects";

const snippet = `
~~~js
console.log('Synchronous 🧁');

setTimeout(() => console.log('Asynchronous task 🍰'), 0);

Promise.resolve()
  .then(() => console.log('Asynchronous microtask 🍬'));

console.log('Synchronous 🥑');

~~~
`;

const playbook: SideEffect[] = [
  compose(pushStack("main", { args: [], ln: 0, handler: "main" }), pushLine(1)),
  compose(
    pushStack("console.log", {
      ln: 1,
      args: ['"Synchronous 🧁"'],
      handler: "stack.log-1",
    }),
    apiCall("log", { handler: "api.log-1" }),
    pushLine(1),
  ),
  compose(popStack("stack.log-1"), popStack("api.log-1"), pushLine()),
  compose(
    pushLine(),
    pushStack("setTimeout", {
      ln: 3,
      args: ["anonymous Fn", 0],
      handler: "stack.timeout",
    }),
    apiCall("Timer API", { handler: "api.timer" }),
  ),
  compose(popStack("api.timer"), task("timer", 0, { handler: "task.timer" })),
  compose(popStack("stack.timeout"), pushLine()),
  compose(
    pushLine(),
    pushStack("Promise.resolve", {
      ln: 5,
      args: ["anonymous Fn"],
      handler: "stack.promise-resolve",
    }),
  ),
  compose(
    popStack("stack.promise-resolve"),
    pushLine(),
    pushStack("then", {
      ln: 6,
      args: ["anonymous Fn"],
      handler: "stack.promise-then",
    }),
    microTask("anonymous Fn", { handler: "microtask.promise-then" }),
  ),
  compose(popStack("stack.promise-then"), pushLine()),
  compose(
    pushLine(),
    pushStack("console.log", {
      args: ['"Synchronous 🥑"'],
      ln: 8,
      handler: "stack.log-2",
    }),
    apiCall("log", { handler: "api.log-2" }),
  ),
  compose(popStack("api.log-2"), popStack("stack.log-2"), pushLine()),
  compose(
    popStack("microtask.promise-then"),
    pushStack("anonymous Fn", {
      args: [],
      ln: 6,
      handler: "stack.anonymous-1",
    }),
    pushLine(6),
  ),
  compose(
    pushStack("console.log", {
      args: ['"Asynchronous microtask 🍬"'],
      ln: 6,
      handler: "stack.log-3",
    }),
    apiCall("log", { handler: "api.log-3" }),
  ),
  compose(popStack("stack.log-3"), popStack("api.log-3")),
  compose(pushLine(9), popStack("stack.anonymous-1")),
  compose(
    popStack("task.timer"),
    pushLine(3),
    pushStack("anonymous Fn", {
      args: [],
      ln: 3,
      handler: "stack.anonymous-2",
    }),
  ),
  compose(
    pushStack("console.log", {
      args: ['"Asynchronous task 🍰"'],
      ln: 6,
      handler: "stack.log-3",
    }),
    apiCall("log", { handler: "api.log-3" }),
  ),
  compose(popStack("stack.log-3"), popStack("api.log-3")),
  compose(pushLine(9), popStack("stack.anonymous-2")),
  popStack("main"),
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

export const AsyncExample = () => {
  return (
    <Slide>
      <SlideTitle>What does it mean to be asynchronous?</SlideTitle>
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
