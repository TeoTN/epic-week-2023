import {
  Markdown,
  SectionTitleSlide,
  Slide,
  SlideTitle,
} from '../../../components';
import { Notes } from '../../../components/Notes';
import styled from 'styled-components';

const notes = `
What they essentially are, is a formalism for describing how processes communicate
with each other, using mathematical theories of concurrency. **NEXT**

The concept is at the core of Go language, underpinning the so called go routines
that are relatively well-known for their ease of use and reliability. **NEXT**
but it was also popularized in JavaScript world through implementation of Redux Saga
library, which implements them through use of generators.
`;

const Pre = styled.pre`
  display: inline !important;
  font-size: inherit !important;
  color: var(--r-lorax)
`;

export const CSPFeatures = () => (
  <Slide>
    <SlideTitle>Communicating Sequential Processes (CSP)</SlideTitle>
    <ul>
      <li>
        Formal language to describe concurrent processes communication
      </li>
      <li className="fragment">
        Used by famous <Pre>Go routines</Pre> in Go language
      </li>
      <li className="fragment">
        Implemented with generators in JavaScript - <Pre>redux-saga</Pre> library
      </li>
    </ul>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
