import { Markdown, Slide, SlideTitle } from '../../components';
import { Notes } from '../../components/Notes';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const notes1 = `
Another important building block of the runtime environment that I would like to
talk about is the Event Loop. It is the core feature that enables asynchrony in
JavaScript environment.
`;

const notes2 = `
Event loop is a mechanism that governs when and what code is executed by the 
engine. It is implemented in a run-to-completion manner, meaning, that any task
processed at the current moment will run until its finished, potentially blocking
the next task from being run.
This differs from threads known from other programming languages in that the 
system cannot pause the thread, and switch to executing code from another thread.

The loop is constantly waiting for tasks to arrive from the environment, and
performs them. This can include rendering steps like computing styles and layout,
painting the updates to the DOM, calling functions queued with 
requestAnimationFrame. It will also execute code in response to events we have
setup listeners for, or timers that we have scheduled.

If our main code has for instance set up a timer to be executed after one second,
the browser will setup a timer, and after no less than a second, it will push 
a message to the Task Queue. The task will be picked up in the next cycle of the
event loop, and delegated to the JavaScript engine, resulting in the callback
being executed.
`;

const ITEM_SIZE = 100;

const EventLoopContainer = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, #d309e1 0%, rgb(156, 26, 255) 100%);
  border-radius: 1rem;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const LoopItem = styled(motion.div)`
  position: absolute;
  background: white;
  border-radius: 30px;
  width: ${ITEM_SIZE}px;
  height: ${ITEM_SIZE}px;
`;

const animate = {
  x: [
    -.75 * ITEM_SIZE,
    -ITEM_SIZE,
    0,
    ITEM_SIZE,
    .75* ITEM_SIZE,
    -.75 * ITEM_SIZE,
  ],
  y: [-2 * ITEM_SIZE, 0, 0, 0, -2 * ITEM_SIZE, -2 * ITEM_SIZE],
  scale: [0.5, 1, 1, 1, 0.5, 0.5],
  opacity: [.3, 1, 1, 1, .3, .3],
  rotate: [270, 0, 0, 0, 270, 0],
  borderRadius: ["50%", "10%", "10%", "10%","50%", "50%"],
  backgroundColor: ['#ffffff', '#ffffff', '#00BDA5', '#ffffff', '#ffffff', '#ffffff'],
};
const transition = {
  duration: 2,
  ease: ['linear', 'backIn', 'backIn','linear', 'linear'],
  times: [0.3, 1, 1.5, 2, 2.5],
  repeat: Infinity,
  repeatDelay: 0.3,
};

export const EventLoop = () => {
  return (
    <>
      <Slide>
        <SlideTitle>Event Loop</SlideTitle>
        <Notes>
          <Markdown>{notes1}</Markdown>
        </Notes>
      </Slide>
      <Slide>
        <SlideTitle>Event Loop</SlideTitle>
        <EventLoopContainer>
          <LoopItem animate={animate} transition={{...transition, delay: 2.8 }} />
          <LoopItem animate={animate} transition={{...transition, delay: 2.3 }} />
          <LoopItem animate={animate} transition={{ ...transition, delay: 1.8 }} />
          <LoopItem animate={animate} transition={{ ...transition, delay: 1.3 }} />
          <LoopItem animate={animate} transition={{ ...transition, delay: 0.8 }} />
        </EventLoopContainer>
        <Notes>
          <Markdown>{notes2}</Markdown>
        </Notes>
      </Slide>
    </>
  );
};
