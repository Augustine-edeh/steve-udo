import SectionWrapper from "./SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col bg-darkGray p-10 w-2/3">
        <h2>PORTFOLIO.</h2>

        <div className="flex-1 flex flex-col justify-center bg-blue-500">
          <h3 className="text-darkGreen">Hello Everyone.</h3>
          <h1 className="flex flex-col text-6xl font-bold">
            I'M STEPHEN <span>UDO</span>
          </h1>

          <div className="mt-8 space-y-2">
            <div className="flex w-fit gap-1 p-0.5 bg-lightGreen">
              <span className="w-44 p-1 bg-darkGray">GRAPHIC, UI/UX DESIGNER</span>
              <button>--></button>
            </div>
            <div className="flex w-fit gap-1 p-0.5 bg-lightGreen">
              <span className="w-44 p-1 bg-darkGray"> DEVELOPER, DATA ANALYST</span>
              <button>--></button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lightGreen w-1/3">section 2</div>
    </SectionWrapper>
  );
};

export default Hero;
