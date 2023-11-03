import { Markdown, Slide, SlideTitle } from "../../../components";
import { Notes } from '../../../components/Notes';

const body = `
~~~js
let a = 15;

const cb1 = () => { a = a * 3; };

const cb1 = () => { a = a + 5; };

http.request('/api/endpoint', cb1); 
http.request('/api/endpoint', cb2);

console.log(a); 
`;

const notes = `
[Poll](https://app.sli.do/event/xykxgzgh)
[Admin](https://admin.sli.do/event/xykxgzgh/polls) 
[Live](https://wall.sli.do/event/xykxgzgh?section=57547dc8-3de1-4bc7-ac46-17e5ea79c5b2)
`;

export const CallbacksQuiz = () => (
  <Slide>
    <SlideTitle>What is printed in the console?</SlideTitle>
    <Markdown>{body}</Markdown>
    <Notes><Markdown>{notes}</Markdown></Notes>
  </Slide>
);
