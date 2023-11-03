import { Markdown, Slide, SlideTitle } from '../../components';
import { Notes } from '../../components/Notes';

const notes = `
Asynchrony can be understood as a gap between now and later. It's a mechanism,
that allows us to write code that when executed in present moment, will setup
what should happen in the future when an event or an action occurs. **NEXT**

The future events don't have to follow immediately the code that is executed now,
and there might be a time gap between the two, where we don't know when exactly
and if at all the future event will arrive. **NEXT**

As you might have heard, JavaScript is a single-threaded, non-blocking language,
that has support for concurrency and asynchrony. 

This might seem contradictory, so we'll try to shed some light on that,
and have a look how JavaScript works, and what web browsers and Node.js do,
to make possible things like making network calls, reading from I/O or responding 
to clicks on the page.
`;

export const AsynchronyDefinition = () => (
  <Slide>
    <SlideTitle component="h2">What is asynchrony?</SlideTitle>
    <ul>
      <li className="fragment">
        Some <strong>independent events</strong> occur in parallel to the main
        program execution
      </li>
      <li className="fragment">
        There's a <strong>gap</strong> between code executing{' '}
        <strong>now</strong> and scheduled for <strong>later</strong>
      </li>
    </ul>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
