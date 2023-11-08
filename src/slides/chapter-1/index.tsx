import { Slide } from "../../components";
import { Preface } from "./00-Preface";
import { AsynchronyDefinition } from "./01-AsynchronyDefinition";
import { EventLoop } from "./02-EventLoop";
import { PracticalExamples } from "./03-PracticalExamples";

export const Chapter1 = () => (
  <Slide>
    <Preface />
    <AsynchronyDefinition />
    <EventLoop />
    <PracticalExamples />
  </Slide>
);
