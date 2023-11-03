import { PromisesIntro } from './PromisesIntro';
import { PromisesParallel } from './PromisesParallel';
import { PromisesDualism } from './PromisesDualism';
import { PromisesAntipatterns } from './PromisesAntipatterns';
import { PromisesOutro } from './PromisesOutro';
import { PromisesMicroTasks } from './PromisesMicroTasks';
import { PromisesMicroTaskVisualization } from './PromisesMicroTaskVisualization';

export const Promises = () => (
  <>
    <PromisesIntro />
    <PromisesParallel />
    <PromisesDualism />
    <PromisesMicroTasks />
    <PromisesMicroTaskVisualization />
    <PromisesAntipatterns />
    <PromisesOutro />
  </>
);
