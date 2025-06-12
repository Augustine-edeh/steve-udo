import LayeredImage from "./LayeredImage";
import SectionWrapper from "./SectionWrapper";

const PersonalSkills = () => {
  return (
    <SectionWrapper className="bg-darkGray">
      {/* <div className="bg-darkGray w-1/2"> */}

      <div className="flex flex-col justify-center gap-5 w-full lg:w-1/2">
        <h1 className="text-4xl font-bold">Personal Skills</h1>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            vel omnis, repellendus ad recusandae veniam molestiae et earum
            ducimus adipisci iste. Odit adipisci voluptatem est laborum
            consectetur quas eaque molestias!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            error nesciunt nihil fugit, neque iure quibusdam doloribus beatae
            eaque, quas odit tempora amet quo. Necessitatibus doloremque
            possimus voluptatibus eius consequatur?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            neque harum voluptas reprehenderit nesciunt numquam, maiores quos
            deserunt ullam. Ex provident quae sit soluta molestiae dolorum qui
            velit quas mollitia.
          </p>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center bg-darkGray w-full lg:w-2/3">
        <LayeredImage src="/Steve-white.jpeg" alt="Stephen Udo" />
      </div>
    </SectionWrapper>
  );
};

export default PersonalSkills;
