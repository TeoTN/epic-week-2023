import { SectionTitleSlide, Slide } from '../../components';
import { CallStack } from './CallStack';
import { JSEnv } from './JSEnv';
import { JSEngine } from './JSEngine';
import { AsynchronyDefinition } from './AsynchronyDefinition';
import { EventLoop } from './EventLoop';
import { FullPicture } from './FullPicture';

const notes = `**NEXT**`;

export const Chapter1 = () => (
  <Slide>
    <SectionTitleSlide title="What is asynchrony?" notes={notes} />
    <AsynchronyDefinition />
    <JSEnv />
    <JSEngine />
    <CallStack />
    <EventLoop />
    <FullPicture />
  </Slide>
);
