import styled from "styled-components";
import avatar from "../../assets/avatar.jpg";
import { Markdown, Slide } from "../../components";
import dedent from "dedent";
import { EndOfChapter } from "../../components/EndOfChapter";

const Image = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
`;

const Header = styled.header`
  position: absolute;
  top: -2rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.light.base0};
`;

const Container = styled.div`
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

Enough for the gossips, let's get to the technical part. ➡️
➡️
`;

export const AboutMe = () => (
  <Slide notes={notes}>
    <Header>
      <h3 aria-level={1}>Who am I?</h3>
    </Header>
    <Container>
      <Markdown>
        {dedent`
      # Piotr Staniów

      * Senior Software Engineer II
      * Part of Admin Governance team
      * In HubSpot since April, 2021
      * Initially joined Dublin office, moved to Berlin in June 2022
      `}
      </Markdown>
      <Image src={avatar} />
    </Container>
  </Slide>
);
