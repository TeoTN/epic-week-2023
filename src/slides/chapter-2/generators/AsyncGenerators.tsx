import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';
import { TwoColumns } from '../../../components/TwoColumns';

const snippet = `
~~~js
async function* getAllPages() {
  for (let i = 0; i < 10; ++i) {
    const response = await fetch(\`url/page\${i}\`);
    yield parsed(await response.json());
  }
}

const iterator = getAllPages();
for await (let page of iterator) {
  console.log(page);
}
~~~
`;

const notes = `
What we haven't discussed yet, that is extremely powerful tool is async generators.
As you can see in the snippet I prepared for you, you can mix the generators and
async await syntax.

Isn't that great?

The example I prepared here, is using a generator to make ten network calls to 
some imaginary service, potentially polling first ten pages of some resource.

Next, we can actually use for await loop, that not only iterates over values of
the iterator, but also awaits the promise yielded by the generator.

This proves to be an extremely powerful pattern for working with asynchronous 
code when we deal with multiple values arriving over time. This could be like in
this example iteration over many resources or pages, but this could be as well
a real-time stream of stock value data coming over a websocket.
`;

export const AsyncGenerators = () => (
  <Slide>
    <SlideTitle>Async Generators</SlideTitle>
    <Markdown>{snippet}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
