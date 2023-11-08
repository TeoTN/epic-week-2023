import { Slide } from "../../components";
import { AboutMe } from "./AboutMe";
import { TitleSlide } from "./TitleSlide";

export const Intro = () => (
  <Slide>
    <TitleSlide />
    <AboutMe />
  </Slide>
);
