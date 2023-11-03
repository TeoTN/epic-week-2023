import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from "../../../components/Notes";

const snippet = `
~~~js
async function getWeather(user) {
  const position = await lib.getGPSPosition();
  const lng = parseInt(coordinates.longitude);
  const lat = parseInt(coordinates.latitude);
  const city = await lib.findCityBy(lng, lat);
  const weather = await lib.weather(user.authToken, city);
  return weather; 
}
~~~
`;

const notes = `
Let's have a look at this simple example of async function. I've mentioned 
previously, that the async keyword enables use of await keyword in the function.

The way it works is that if the expression after the keyword await is a promise,
it will pause the execution of that function until that promise is resolved.
It is worth noting however, this will not block your main thread, since the async
functions are - well - asynchronous.

You can think of it, as if the await keyword
was actually splitting your function into two pieces, the former executed now,
and the latter executed at a later time, when the awaited promise gets resolved. 
`

export const AsyncAwaitMotivation = () => (
  <Slide>
    <SlideTitle>Async / Await syntax</SlideTitle>
    <Markdown id="async-await-getWeather">
      {snippet}
    </Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
