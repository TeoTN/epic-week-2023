import { Slide } from "../../components";
import { AboutMe } from "./02-AboutMe";
import { TitleSlide } from "./01-TitleSlide";
import { Agenda } from "./03-Agenda";

export const Intro = () => (
  <Slide>
    <TitleSlide />
    <AboutMe />
    <Agenda />
  </Slide>
);
