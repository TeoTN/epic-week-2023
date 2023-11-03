import { Slide, SlideTitle } from '../../components';
import { VisualRuntime } from '../../components/visual-runtime';
import { thePlaybook, theSnippet } from '../../components/visual-runtime/demo';
import {
  apiCall,
  compose,
  popStack,
  pushLine,
  pushStack,
  repeat,
  SideEffect,
  task,
} from '../../components/visual-runtime/effects';

const snippet = `
~~~js
let a = 15;
const callback1 = () => {
  a = a * 2;
  console.log(a);
};
const callback2 = () => {
  a = a + 3;
  console.log(a);
};

setTimeout(callback1, 2000);
setTimeout(callback2, 3000);
console.log(a);

~~~
`;

const playbook: SideEffect[] = [
  compose(
    pushStack('main', {
      args: [],
      ln: 0,
      handler: 'main',
      sideEffects: undefined,
      animateFrom: undefined,
    }),
    pushLine(1),
  ),
  pushLine(),
  repeat(pushLine, { times: 4 }),
  repeat(pushLine, { times: 4 }),
  compose(
    pushLine(),
    pushStack('setTimeout', {
      ln: 11,
      args: ['callback1', 2000],
      handler: 'timeout-1',
      sideEffects: [
        apiCall('Timer API', {
          sideEffects: [
            task('timer', 2000, {
              handler: 'task-1',
              sideEffects: [popStack('api-1')],
            }),
          ],
          handler: 'api-1',
        }),
      ],
    }),
  ),
  compose(popStack('timeout-1'), pushLine()),
  compose(
    pushStack('setTimeout', {
      ln: 12,
      args: ['callback2', 3000],
      handler: 'timeout-2',
      sideEffects: [
        apiCall('Timer API', {
          sideEffects: [
            task('timer', 3000, {
              handler: 'task-2',
              sideEffects: [popStack('api-2')],
            }),
          ],
          handler: 'api-2',
        }),
      ],
    }),
  ),
  compose(popStack('timeout-2'), pushLine()),
  pushStack('console.log', { ln: 13, args: [15], handler: 'global-log' }),
  popStack('global-log'),
  popStack('main'),
  compose(
    pushStack('callback1', { ln: 11, args: [], handler: 'callback1' }),
    popStack('task-1'),
    pushLine(2),
  ),
  repeat(pushLine, { times: 2 }),
  pushStack('console.log', { ln: 4, args: [30], handler: 'log-1' }),
  compose(pushLine(), popStack('log-1')),
  compose(popStack('callback1'), pushLine(0)),
  compose(
    pushStack('callback2', { ln: 12, args: [], handler: 'callback2' }),
    popStack('task-2'),
    pushLine(6),
  ),
  repeat(pushLine, { times: 2 }),
  pushStack('console.log', { ln: 8, args: [33], handler: 'log-2' }),
  compose(pushLine(), popStack('log-2')),
  compose(popStack('callback2'), pushLine(0)),
];

export const FullPicture = () => {
  return (
    <Slide>
      <SlideTitle>Full picture</SlideTitle>
      <VisualRuntime
        playbook={playbook}
        snippet={snippet}
        showApiCalls
        showTasks
      />
    </Slide>
  );
};
