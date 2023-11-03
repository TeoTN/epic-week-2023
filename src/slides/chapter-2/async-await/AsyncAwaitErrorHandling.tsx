import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from "../../../components/Notes";

const snippet = `
~~~js
async function getWeather(user) {
  try {
    const position = await lib.getGPSPosition();
  } catch (error) {
    logger.error(error);
  }
  const lng = parseInt(coordinates.longitude);
  const lat = parseInt(coordinates.latitude);
  const city = await lib.findCityBy(lng, lat);
  const weather = await lib.weather(user.authToken, city);
  return weather; 
}
~~~
`;

const notes = `
We can also observe that async/await syntax is finally the abstraction that
solves the callback hell problem, as we are not using callbacks anymore. Instead
the code is written in a more procedural way.

You might've been wondering, what if the awaited promise gets rejected?
In such case, an error will be thrown, so if you wanted to handle this, you can
wrap the await expression in try-catch statement, like in this snippet.

Finally, if we didn't handle the error with try-catch statement, it would the 
error would bubble up. What is an interesting consideration is that async/await
syntax has better performance that just the promises. The reason for that is
that when promise gets rejected, the call stack was already emptied before this 
has happened.

To actually be able to attach a meaningful stack trace to promises, browsers are
attaching a call stack snapshot to a promise, so that when it gets rejected, we 
can see where it originates from.
`

export const AsyncAwaitErrorHandling = () => (
  <Slide>
    <SlideTitle subtitle="Error handling">Async / Await syntax</SlideTitle>
    <Markdown id="async-await-getWeather">
      {snippet}
    </Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
