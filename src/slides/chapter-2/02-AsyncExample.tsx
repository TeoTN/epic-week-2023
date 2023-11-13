import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";
import { VisualRuntime } from "../../components/visual-runtime";
import {
  SideEffect,
  apiCall,
  compose,
  microTask,
  popStack,
  pushLine,
  pushStack,
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
(Do live)
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
