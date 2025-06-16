import LayeredImage from "./LayeredImage";
import RatingBar from "./RatingBar";
import SectionWrapper from "./SectionWrapper";

const PersonalSkills = () => {
  return (
    <SectionWrapper className="bg-darkGray gap-10 items-center px-5 md:px-32 lg:px-40">
      {/* <div className="bg-dark Gray w-1/2"> */}

      {/* <div className="flex flex-col justify-center gap-5 w-full lg:w-1/2 bg-amber-400"> */}
      <div className="flex flex-col justify-center gap-5 w- full lg :w-1/2">
        <h1 className="text-4xl font-bold">Personal Skills</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          vel omnis, repellendus ad recusandae veniam molestiae et earum ducimus
          adipisci iste. Odit adipisci voluptatem est laborum consectetur quas
          eaque molestias!
        </p>

        <div className="mt-5 space-y-6">
          <RatingBar rating={90} skill="Graphic Designer" />
          <RatingBar rating={95} skill="Video Editing" />
        </div>
      </div>

      {/* <div className="hidden lg:flex justify-center items-center bg-red-50 w-full lg:w-2/3"> */}
      <div className="hidden lg:block bg-red-950">
        <LayeredImage src="/Steve-pro_bg.jpeg" alt="Stephen Udo" />
      </div>
      {/* </div> */}
    </SectionWrapper>
  );
};

export default PersonalSkills;
