import { Slide } from "../../components";
import { Preface } from "./00-Preface";
import { AsynchronyDefinition } from "./01-AsynchronyDefinition";
import { EventLoop } from "./02-EventLoop";
import { PracticalExamples } from "./03-PracticalExamples";
import { BlockingPromise } from "./05-BlockingPromise";
import { ExhaustiveMicrotaskQueue } from "./06-ExhaustiveMicrotaskQueue";
import { ExposingPromises } from "./07-ExposingPromises";
import { Promisify } from "./08-Promisify";
import { DeferredObject } from "./09-Deferred";
import { AsyncFn } from "./10-AsyncFn";
import { Await } from "./11-Await";
import { ReturnAwait } from "./12-ReturnAwait";

export const Chapter1 = () => (
  <Slide>
    <Preface />
    <AsynchronyDefinition />
    <EventLoop />
    <PracticalExamples />
    <BlockingPromise />
    <ExhaustiveMicrotaskQueue />
    <ExposingPromises />
    <Promisify />
    <DeferredObject />
    <AsyncFn />
    <Await />
    <ReturnAwait />
  </Slide>
);
