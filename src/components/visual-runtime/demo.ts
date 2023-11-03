import { apiCall, compose, popStack, pushLine, pushStack, repeat, SideEffect, task } from './effects';

export const thePlaybook: SideEffect[] = [
  compose(
    pushStack('main', {
      args: [],
      ln: 0,
      sideEffects: undefined,
      animateFrom: undefined,
      handler: 'main',
    }),
    repeat(pushLine, { times: 3 }),
  ),
  repeat(pushLine, { times: 4 }),
  repeat(pushLine, { times: 5 }),
  pushLine(),
  compose(
    pushStack('step', { ln: 14, args: [0, 1, 2], handler: 'step' }),
    pushLine(9),
  ),
  pushLine(),
  compose(
    pushStack('sum', { ln: 10, args: [0, 1], handler: 'sum' }),
    pushLine(1),
  ),
  pushLine(),
  compose(popStack('sum'), pushLine(10)),
  pushLine(),
  compose(
    pushStack('mul', { ln: 11, args: [1, 2], handler: 'mul' }),
    pushLine(5),
  ),
  pushLine(),
  compose(popStack('mul'), pushLine(11)),
  compose(pushLine(14), popStack('step')),
  compose(
    pushLine(),
    pushStack('setTimeout', {
      ln: 15,
      args: ['Function function', 2000],
      sideEffects: [
        apiCall('setTimeout', {
          sideEffects: [task('callback', 2000)],
        }),
      ],
      handler: 'setTimeout',
    }),
  ),
  popStack('setTimeout'),
  popStack('main'),
  // TODO Wait for task queue to fill
  pushStack('callback', { ln: 15, args: [], handler: 'cb' }),
  pushStack('console.log', { ln: 15, args: [2000], handler: 'log' }),
  popStack('log'),
  popStack('callback'),
];

export const theSnippet = `
~~~js
function sum(a, b) {
  return a + b;
}

function mul(x, y) {
  return x * y;
}

function step(a, p, q) {
  const a1 = sum(a, p);
  return mul(a1, q);
}

const n = step(0, 1, 2);
setTimeout(() => console.log(n), n * 1000);

~~~
`;