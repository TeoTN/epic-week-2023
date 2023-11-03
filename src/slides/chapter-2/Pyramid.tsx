import { Slide, SlideTitle } from "../../components";
import pyramid from "../../assets/pyramid.png";
import jump from "../../assets/jump.png";
import styled from "styled-components";

const Illustration = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  position: relative;
`;

interface PointerProps {
  step: number;
}

const Pointer = styled.img<PointerProps>`
  position: absolute;
  bottom: ${({ step }) => `${step * 45}px`};
  left: 60%;
  width: 80px;
  height: 80px;
  filter: hue-rotate(132deg) saturate(25000%);
`;

const notes = `
Here is the list of most commonly used APIs, that can facilitate writing
asynchronous code. They are sorted in a subjective way, but the most basic ones
are towards the bottom of the list, they are simplest to use but also have least
features. 
On the other hand, the difficulty of these APIs increases going towards the top
of the list but this gives us some features. Let's have a look then: **NEXT**

* Going from callbacks to promises, we will gain explicit control over the flow
of code, which is usually expressed by the chain of then method calls. Promises
also were the tool in the browsers that actually has introduced the notion of
asynchrony in JavaScript, before that, before 2015, there were only tasks and
timers. **NEXT**
* What promises don't have is control over executing the asynchronous function.
The asynchronous action is immediately started as we instantiate the promise.
This is solved by thunks. **NEXT**
* If we wanted to handle asynchronously multiple values arriving over time, 
that wouldn't be exactly possible with any of the previous APIs, since they are
one-off patterns, that are called when single event or action is performed.
Generators are suited for bi-directional communication and receiving multiple
values arriving over time with multiple time gaps between them. **NEXT**
* It is hard to place async/await syntax precisely here, it could also be below
generators as they don't allow bidirectional communication, but they instead are
capable of keeping the stack trace attached to their errors **NEXT**
* The next abstraction is not available in web browsers yet, however there's 
a proposal to the ECMA Script standard to introduce them, so likely sooner or 
later they will arrive natively. For now, they're only available through libraries
like RxJS. What observables offer that previous tools don't
have is cancellation of subscription to the multiple values. **NEXT**
* And the last one is Communicating Sequential Processes, which is formal 
concept that is implemented for instance by redux-saga library. In this case,
the wrappers around asynchronous actions may communicate with each other via
a separate channel. So for example when an asynchronous event occurs these 
entities may exchange a few messages, independently triggering more async 
actions.**NEXT**
`;

export const Pyramid = () => (
  <Slide>
    <SlideTitle>APIs for handling asynchrony</SlideTitle>
    <div className="r-stack">
      {[1, 2, 3, 4, 5, 6].map((step) => (
        <Illustration className="fragment" key={step}>
          <img src={pyramid} alt="Pyramid of features per API" />
          <Pointer src={jump} alt="pointer" step={step} />
        </Illustration>
      ))}
    </div>
  </Slide>
);
