import { TwoColumns } from '../../../components/TwoColumns';
import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const snippet1 = `
~~~js
const promise = new Promise(
  (resolve, reject) => {
    setTimeout(resolve, 5000);
  }
);
~~~
`;

const snippet2 = `
~~~js
promise.then(() => {
  return http.requestPromise();
})
.catch((error) => {
  logger.error(error);      
});
~~~
`;

const notes = `
The Promise API has some dualism built into it. There are basically two sides of
the same coin - the Promise constructor is used to wrap some asynchronous action,
like a call to another API, or handling of an event, and the wrapper immediately
calls the function we passed to the constructor. 

It's worth noting here that promises are always asynchronous, even if they are
immediately resolved, so even if the example to the left didn't use setTimeout
it'd still be asynchronous.

On the other hand, there's the API that we use when dealing a promise that was
already created. It is far more frequent to use the API to the right, since 
usually the promise was already created either by runtime environment's API or
by a library.

`;

export const PromisesDualism = () => (
  <Slide>
    <SlideTitle subtitle="API dualism">Promises</SlideTitle>
    <TwoColumns
      left={
        <Markdown>{snippet1}</Markdown>
      }
      right={
        <Markdown>{snippet2}</Markdown>
      }
    />
    <Notes><Markdown>{notes}</Markdown></Notes>
  </Slide>
);
