import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <div className="bg-darkGray w-2/3">About Left Section</div>
      <div className="bg-lightGreen w-2/3">About Right Section</div>
    </SectionWrapper>
  );
};

export default About;
