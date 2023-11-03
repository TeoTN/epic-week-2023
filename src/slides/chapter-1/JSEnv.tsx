import { Markdown, Slide, SlideTitle } from '../../components';
import { Notes } from '../../components/Notes';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import V8Icon from '../../assets/V8_engine.svg';
import QueueIcon from '../../assets/queue.png';
import APIIcon from '../../assets/api.png';
import LoopIcon from '../../assets/loop.png';

const RuntimeEnvironment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.dark.base2};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.dark.base1};
  border-radius: 1rem;
  padding: 1rem;
`;

const Engine = styled(motion.div).attrs({ className: 'fragment' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light.base3};
  width: 180px;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fonts.size.h4};
  padding: ${({ theme }) => theme.spacing(2)};

  & img {
    width: 80%;
    height: 80%;
    margin: 0;
  }
`;

const EventLoop = styled(Engine)`
  background-color: ${({ theme }) => theme.colors.cyan};
`;
const TaskQueue = styled(Engine)`
  background-color: ${({ theme }) => theme.colors.violet};
`;
const APIs = styled(Engine)`
  background-color: ${({ theme }) => theme.colors.magenta};
`;

const notes = `
Before we jump straight into using asynchrony in JavaScript, let's talk
a little bit about some terms that we'll use in this talk, and what they
mean. Code written in JavaScript language is usually executed in so
called _runtime environment_. **NEXT**
 
The runtime environment may refer
to a web browser like Google Chrome, Microsoft Edge or Firefox, but it
can also refer to Node.js. The runtime environment usually comprises a
JavaScript engine **NEXT**,
 
an event loop, task queue, and some APIs
like DOM API, or I/O APIs in the case of Node.js. One notable example of
JavaScript engine is V8 - developed by Google for its Chrome browser,
later adopted and used in Node.js and Edge. JavaScript code is run by
single-threaded engine, that consists only of a call stack and a heap.
**NEXT**
`;

export const JSEnv = () => (
  <Slide>
    <SlideTitle>Runtime Environment</SlideTitle>
    <RuntimeEnvironment className="fragment">
      <Engine>
        <img src={V8Icon} alt="Google V8 engine logo" />
        Engine
      </Engine>
      <EventLoop>
        <img src={LoopIcon} alt="Event loop" />
        Event Loop
      </EventLoop>
      <TaskQueue>
        <img src={QueueIcon} alt="Task queue" />
        Task Queue
      </TaskQueue>
      <APIs>
        <img src={APIIcon} alt="Environment API" />
        API
      </APIs>
    </RuntimeEnvironment>
    <Notes>
      <Markdown>
        {notes}
      </Markdown>
    </Notes>
  </Slide>
);
