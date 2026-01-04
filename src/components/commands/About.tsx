import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
     <p>
  Hi, my name is <HighlightSpan>Hernandez Avelino</HighlightSpan>!
</p>
<p>
  I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Yangon, Myanmar.
</p>
<p>
  I am passionate about writing code and <br />
  developing web applications to solve real-life challenges.
</p>
<p>
  I am a <HighlightAlt>Senior Full Stack Software Engineer</HighlightAlt> with 7+ years of experience
  building, testing, and deploying production-grade web applications. I have expertise in 
  <HighlightAlt>React, Next.js, TypeScript, Node.js, relational and NoSQL databases, and cloud infrastructure</HighlightAlt>.
</p>
<p>
  Experienced in designing integrations with third-party services, implementing automated tests 
  (<HighlightAlt>Jest</HighlightAlt>), and delivering scalable, reliable solutions in high-growth, remote-first environments. 
  I have a proven ability to work as a high-impact individual contributor, translating product requirements 
  into customer-focused, performant features.
</p>
    </AboutWrapper>
  );
};

export default About;
