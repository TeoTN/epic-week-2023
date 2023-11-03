import {
  Markdown,
  SectionTitleSlide,
  Slide,
  SlideTitle,
} from '../../../components';
import { Notes } from '../../../components/Notes';

const notes = `
This is an example of how a communicating process might look like. 
While it doesn't exactly show how channel is prepared or processes are spawned,
this is an excellent overview of how two processes may exchange information 
between them, simulating processes. In this example, we see two players named 
either ping or pong, who are passing a ball between them every second.

What is important is that the code still seems synchronous, and is not blocking
the main thread.  
`;

const snippet = `
~~~js
async function* player(name) {
  while (true) {
    const ball = yield take(tableChannel);
    if (ball.type === Type.CLOSED) break;
    ball.hits++;
    console.log(name);
    await sleep(1000);
    yield put(ball, tableChannel) 
  }
}

await player('Ping');
await player('Pong');
~~~
`;

export const CSPExample = () => (
  <Slide>
    <SlideTitle>Communicating Sequential Processes (CSP)</SlideTitle>
    <Markdown>{snippet}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
