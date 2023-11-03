import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const snippet = `
~~~js
function thunkFactory() {
    return function thunk() {
        return new Promise(() => {
          // async stuff
          console.log('Action was executed');
        });
    };
}

const concreteThunk = thunkFactory();

concreteThunk(); // Start the async action
~~~
`;

const notes = `
The concept behind the thunk is that we can delay the execution of asynchronous 
action that would otherwise be immediately invoked.

In this scenario, we create a thunk factory, which is responsible for setting up
a thunk for us. Next, the asynchronous action can be lazily invoked by completely
different unit of code. This pattern in leveraged in redux-thunk, where our 
asynchronous action creator would return a thunk. The thunk is passed to the
middleware, which is responsible for invoking it, thus starting the 
asynchronous action.

In this example, this is also visible - while we invoke concreteThunk immediately
in the line after we created it, we could have passed it as an argument to 
another function or API, that would invoke it at a later time.
`;


export const ThunksExample = () => (
  <Slide>
    <SlideTitle>Thunks</SlideTitle>
    <Markdown>{snippet}</Markdown>
    <Notes><Markdown>{notes}</Markdown></Notes>
  </Slide>
)