import { TwoColumns } from "../../components/TwoColumns";
import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";

const snippet1 = `
~~~js
promise.then(() => {
  return fetch()
    .then(res => res.body.results)
})
~~~
`;

const snippet2 = `
~~~js
promise
  .then(fetch)
  .then(res => res.body.results);
~~~
`;

const notes = `
Another useful aspect of utilising promises is, if promise's callback returns
a promise, it will be exposed by "then". Because of that, the two snippets are
equivalent, except that the latter is typically more readable, having less
nesting.
⬇️
`;

export const ExposingPromises = () => (
  <Slide>
    <SlideTitle subtitle="Exposing a Promise from within `then`">
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
