import dedent from "dedent";
import styled from "styled-components";
import avatar from "../../assets/avatar.jpg";
import { Container, Markdown, Slide, SlideTitle } from "../../components";

const Image = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
`;

const Horizontal = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
`;

const notes = `
Let me tell you briefly a little bit about myself, so that you know who will be
talking to you for the next half an hour.

I'm a Senior Software Engineer and a member of Admin Governance team. I've joined
HubSpot on April, 2021, a day before my birthday, and to be fair, I've made myself
a really nice gift joining the company, I'm having a great time here.

I initially joined the Dublin office but in 2022 I moved to Germany, and now I live
closer to my family, since I'm originally from Poland.

Enough for the gossips, let's get started. ➡️
➡️
`;

export const AboutMe = () => (
  <Slide notes={notes}>
    <SlideTitle>Who am I?</SlideTitle>
    <Horizontal>
      <div>
        <h2>Piotr Staniów</h2>
        <Container>
          <Markdown>
            {dedent`
            * Senior Software Engineer II
            * Part of Admin Governance team
            * In HubSpot since April, 2021
            * Initially joined Dublin office, moved to Berlin in June 2022
          `}
          </Markdown>
        </Container>
      </div>
      <Image src={avatar} />
    </Horizontal>
  </Slide>
);
