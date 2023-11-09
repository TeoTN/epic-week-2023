import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";

const snippet1 = `
~~~js
async function fn() {
  const value = await fetch('/api/users')
  return value.results;
}

fn().then(console.log);
~~~
`;

const notes = `
The async keyword enables also another feature, which is use of await keyword.
The await keyword will pause execution of the function until promise that
follows it gets resolved. It works exactly the same as using then, so pretty
much the rest of the function will become a microtask as soon as the awaited
promise gets resolved.

It's worth noting here again, than you can return a promise from an async
function, and it will get exposed as it is. So in nearly all cases, if you see
return await together, it's quite likely await is redundant.
⬇️
`;

export const Await = () => (
  <Slide>
    <SlideTitle subtitle="Async/Await syntax">Practical Examples</SlideTitle>
    <Markdown>{snippet1}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
