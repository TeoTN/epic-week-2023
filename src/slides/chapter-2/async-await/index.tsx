import { AsyncAwaitIntro } from './AsyncAwaitIntro';
import { AsyncAwaitMotivation } from './AsyncAwaitMotivation';
import { AsyncAwaitErrorHandling } from './AsyncAwaitErrorHandling';
import { AsyncAwaitReturnType } from './AsyncAwaitReturnType';
import { AsyncAwaitMixAndMatch } from './AsyncAwaitMixAndMatch';
import { AsyncAwaitOutro } from './AsyncAwaitOutro';

export const AsyncAwait = () => (
  <>
    <AsyncAwaitIntro />
    <AsyncAwaitReturnType />
    <AsyncAwaitMixAndMatch />
    <AsyncAwaitMotivation />
    <AsyncAwaitErrorHandling />
    <AsyncAwaitOutro />
  </>
);
