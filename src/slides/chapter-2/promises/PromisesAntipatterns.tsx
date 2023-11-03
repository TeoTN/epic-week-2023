import { TwoColumns } from '../../../components/TwoColumns';
import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from "../../../components/Notes";

const snippet1 = `
~~~js
const promise = new Promise(
  (resolve, reject) => {
    fetch('/url-1')
      .then(response => {
        if (!response.ok) {
          throw new Error;
        }
        return response
          .json()
          .then(toYAML);
      })
      .then(resolve, reject);
  }
);
~~~
`;

const notes = `
As promises still rely on callbacks, it is still possible to create the same
issue as we saw previously. In the example on the screen, we can again see the
callback hell. It is somewhat easier to avoid this problem with promises, but
it's still possible, and this data structure doesn't solve the problem.
`;

export const PromisesAntipatterns = () => (
  <Slide>
    <SlideTitle subtitle="Callback hell">Promises</SlideTitle>
    <Markdown>{snippet1}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
