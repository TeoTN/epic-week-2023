import { GeneratorsIntro } from './GeneratorsIntro';
import { GeneratorsSyntax } from './GeneratorsSyntax';
import { GeneratorsIngress } from './GeneratorsIngress';
import { GeneratorsErrors } from './GeneratorsErrors';
import { AsyncGenerators } from './AsyncGenerators';
import { GeneratorsOutro } from './GeneratorsOutro';

export const Generators = () => (
  <>
    <GeneratorsIntro />
    <GeneratorsSyntax />
    <GeneratorsIngress />
    <GeneratorsErrors />
    <AsyncGenerators />
    <GeneratorsOutro />
  </>
);
