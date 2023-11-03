import { Markdown, Slide, SlideTitle } from "../../components";
import { Notes } from "../../components/Notes";
import styled from "styled-components";
import { motion } from "framer-motion";
import V8Icon from "../../assets/V8_engine.svg";
import HeapIcon from "../../assets/heap.png";
import StackIcon from "../../assets/stack.png";

const Engine = styled.div`
  position: relative;
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

const Stack = styled(motion.div).attrs({ className: "fragment" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light.base3};
  width: 180px;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fonts.size.h5};
  padding: ${({ theme }) => theme.spacing(2)};

  & img {
    width: 80%;
    height: 80%;
    margin: 0;
  }
`;

const Heap = styled(Stack)`
  background-color: ${({ theme }) => theme.colors.orange};
`;

const Title = styled.h5`
  padding: 0 1rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  & img {
    width: 48px;
    height: 48px;
  }
`;

const notes = `
What might seem to be surprising the JavaScript engine is **NEXT**

* Single-threaded - meaning that at any time the code is run top to the
bottom and nothing might be run in parallel. So it may appear, there's no room
for asynchrony **NEXT**

* The engine runs to completion, meaning that it will run each task until
it either finishes or explicitly yields back control to the scheduler -
the javascript environment. **NEXT**

The engine, depending on the implementation consists of many parts, like
a compiler and interpreter. But what is crucial here is two bits. It has
**NEXT**

* Call Stack - which keeps track of the latest invoked function, with its
execution context and **NEXT**
* Heap memory - which is a mechanism for allocating memory for all the bits
and bobs our code creates. 
`;

export const JSEngine = () => (
  <Slide>
    <SlideTitle>JavaScript Engine</SlideTitle>
    <ul>
      <li className="fragment">Single-threaded</li>
      <li className="fragment">Runs to completion</li>
    </ul>
    <Engine className="fragment">
      <Title>
        <img src={V8Icon} alt="Google V8 engine logo" />
        JavaScript engine
      </Title>
      <Stack>
        <img src={StackIcon} alt="Call Stack" />
        Call Stack
      </Stack>
      <Heap>
        <img src={HeapIcon} alt="Heap Memory" />
        Heap Memory
      </Heap>
    </Engine>
    <Notes>
      <Markdown>
        {notes}
      </Markdown>
    </Notes>
  </Slide>
);
