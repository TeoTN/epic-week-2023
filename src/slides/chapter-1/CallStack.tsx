import { Markdown, Slide, SlideTitle } from "../../components";
import { VisualRuntime } from '../../components/visual-runtime';
import {
  compose,
  popStack,
  pushLine,
  pushStack,
  repeat,
} from '../../components/visual-runtime/effects';
import { Notes } from "../../components/Notes";

const playbook = [
  pushStack('main', { args: [], ln: 0, handler: 'invoke-main' }),
  repeat(pushLine, { times: 3 }),
  repeat(pushLine, { times: 4 }),
  pushLine(),
  compose(
    pushStack('plus5', { ln: 9, args: [3], handler: 'invoke-plus5' }),
    pushLine(5),
  ),
  pushLine(),
  compose(
    pushStack('sum', { ln: 6, args: [3, 5], handler: 'invoke-sum' }),
    pushLine(1),
  ),
  pushLine(),
  compose(popStack('invoke-sum'), pushLine(6)),
  compose(popStack('invoke-plus5'), pushLine(9)),
  pushLine(),
  pushStack('console.log', { ln: 10, args: [8], handler: 'invoke-log' }),
  popStack('invoke-log'),
  popStack('invoke-main'),
];

const snippet = `
~~~js
function sum(a, b) {
  return a + b;
}

function plus5(a) {
  return sum(a, 5);
}

const result = plus5(3);
console.log(result);

~~~
`;

const notes = `
You might be wondering now, so what is the call stack. It's probably best 
explained through an example.

_SPEAKER: Go to the browser, speaker notes won't sync_

* Initially, the call stack is empty, and our JavaScript engine has just 
received the piece of code to be executed **NEXT**
* The first frame is added to the call stack, which represents the global 
context for this snippet. You may think of it as an equivalent of _main_
function from other programming languages. **NEXT**
* In the beginning, the function sum is declared. It is not called yet,
so it won't appear in the call stack. Instead, the memory for the function
is allocated in the heap, which is not represented in this diagram.**NEXT**
* Another function - plus5 - is also declared, and it's kept in the heap
 as well, since functions in JavaScript are actually objects **NEXT**
* The engine starts interpreting the next line - it encounters a call of 
plus5 function, so in the next step it will add a frame to the call stack
* As we can see, the frame was added with a reference to where this function
was called from, so that the interpreter knows where to jump back when it 
reaches the end of that function. It also keeps track of the context of the 
function, including the arguments it was invoked with, variables available 
via closure and global scope. **NEXT**
* As the interpreter reaches the next line, it encounters another call 
expression, this time invoking function sum. As you may expect, in the next
step a respective frame will be pushed to the stack **2x NEXT**
* As we reach the end of function sum, the return statement is executed,
so the interpreter will pop the latest value from the top of the stack, and 
jump back to the line indicated by the frame. **NEXT**
* The value returned by the previous call is now a part of another return 
statement, and we can also successfully return from this function, popping
another frame from the stack **NEXT**
* We have now got the value back, that is successfully assigned to the result
variable **NEXT**
* As we go to the next line, another call expression is found **NEXT**
* This is also added to the stack, with an argument 8 - this is by the way
a call of environment's API which will independently print out the arguments 
passed to it **NEXT**
* Finally the interpreter has reached the end of the snippet **NEXT**
* And this is the moment when the stack has been completely emptied.
This is a moment, where microtasks can be executed. 

So this is basically what the call stack is and how it works. As you can see,
there's nothing neither in the call stack nor the engine that would enable
asynchrony, as the engine is single-threaded, runs a single snippet of code at
a time, no parallelism is allowed.

The part of the runtime environment that actually enables asynchrony is the 
event loop. **NEXT SLIDE**
`;

export const CallStack = () => (
  <Slide>
    <SlideTitle>What is call stack?</SlideTitle>
    <VisualRuntime playbook={playbook} snippet={snippet} />
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);
