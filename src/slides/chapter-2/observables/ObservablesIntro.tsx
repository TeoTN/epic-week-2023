import { SectionTitleSlide } from '../../../components';

const notes = `
Observables are the data structure that is not natively a part of javascript yet.
There is a proposal to add them to ECMA Script standard, however it's currently
in stage 1 and wasn't discussed since 2017, so it's probably a long road ahead
before it becomes part of the standard library.

However, there's an excellent library called Rx, that was ported to many 
languages, to name a few there's RxJava, RxCpp, RxPY, RxGo, RxKotlin and 
 of course RxJS.
 
Before we proceed, I'd like to tone down the expectations a little bit, because
in my experience, it takes usually months if not years before someone is really
proficient with observables, but nevertheless, let's have a look at them to get a
grasp how they're working.
`;

export const ObservablesIntro = () => (
  <SectionTitleSlide title="Observables" notes={notes} />
);
