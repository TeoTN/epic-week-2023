import { SectionTitleSlide, Slide } from '../../components';
import { AsyncAPI } from './AsyncAPI';
import { Callbacks } from './callbacks';
import { Promises } from './promises';
import { AsyncAwait } from './async-await';
import { Pyramid } from './Pyramid';
import { Thunks } from './thunks';
import { Generators } from './generators';
import { Observables } from './observables';
import { CSP } from './csp';

export const Chapter2 = () => (
  <Slide>
    <SectionTitleSlide
      title="Asynchronous APIs"
      subtitle="APIs that help writing asynchronous code"
    />
    <AsyncAPI />
    <Pyramid />
    <Callbacks />
    <Promises />
    <Thunks />
    <AsyncAwait />
    <Generators />
    <Observables />
    <CSP />
  </Slide>
);
