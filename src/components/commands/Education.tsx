import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
 {
    title: "M.S in Computing & System Development",
    desc: "Southern Methodist University — Dallas, TX | 2013 - 2015",
  }, 
  {
    title: "B.Sc  in Computing",
    desc: "University of Texas at Austin — Austin, TX | 2009 ~ 2013",
  },
  
 
];

export default Education;
