import { Markdown, Slide } from '../../../components';
import { Notes } from '../../../components/Notes';

const body = `
### Callbacks

~~~js
  const timeout = 5000;
  function callback() {
    console.log('Timed out');
  }
  
  setTimeout(callback, timeout);
~~~
`;

export const CallbacksExample = () => (
  <Slide>
    <Markdown>{body}</Markdown>
    <Notes>
      <ul>
        <li>
          Callback is a <strong>function</strong> scheduled to run upon completion
          of action or occurrence of event
        </li>
        <li>
          Scheduling a callback occurs by passing it as an{' '}
          <strong>argument</strong> to another function
        </li>
        <li>
          Callback is called when <strong>runtime environment</strong> messages
          JavaScript engine when ready
        </li>
      </ul>
    </Notes>
  </Slide>
);
