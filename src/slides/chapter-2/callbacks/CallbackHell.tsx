import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';
import { TwoColumns } from '../../../components/TwoColumns';

const snippet1 = `
~~~js
getGPSPosition((pos) => {
  const [lng, lat] = parsePosition(pos);
  findCity(lng, lat, (city) => {
    getWeather(city, (weather) => {
      setWeather(weather);
    });
  });
  setPosition([lng, lat]);
});
~~~
`;

const snippet2 = `
~~~js
first((pos) => {
  const [lng, lat] = second(pos);
  third(lng, lat, (city) => {
    fifth(city, (weather) => {
      sixth(weather);
    });
  });
  fourth([lng, lat]);
});
~~~
`;

const notes = `
One of notable issues with callbacks is so called callback hell. The problem is
so common and widespread, that it has even got its own website - callbackhell.com **NEXT**

I have prepared a simple example on this slide, that demonstrates the core issue
with callbacks. Both snippets of code represent the same functionality, but the
one to the right has functions names changed so that they reflect the order in 
which they are called.

The key issues here revolve around code readability, and since we usually read
code more frequently than we write this antipattern may be quite severely.

First issue is that it's hard to reason about the order of execution of these 
functions. As humans, we're more suited to read text top-to-bottom, this is how
for instance books are organized that we read since childhood, and it is 
counter-intuitive that these functions are not executed in the order of
appearance. It's hard to reason about such code.

Similarly, the code might get badly indented forming a triangle to the left,
which also impacts the ability to quickly scan code in search for a bug, 
especially when one gets paged at 3a.m. in the morning, but this can be partially
alleviated by extracting functions. Yet, the flow remains complex.
`;

export const CallbackHell = () => (
  <>
    <Slide>
      <SlideTitle>Callback hell</SlideTitle>
    </Slide>
    <Slide>
      <SlideTitle subtitle="www.callbackhell.com">Callback hell</SlideTitle>
      <TwoColumns
        left={<Markdown>{snippet1}</Markdown>}
        right={<Markdown>{snippet2}</Markdown>}
      />
      <Notes>
        <Markdown>{notes}</Markdown>
      </Notes>
    </Slide>
  </>
);
