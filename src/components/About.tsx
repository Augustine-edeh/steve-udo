import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <SectionWrapper className="">
      <div className="hidden lg:flex justify-center items-center bg-darkGray w-full lg:w-2/3">
        <div className="flex relative">
          <div className="h-96 w-80 bg-lightGreen"></div>
          <div className="absolute left-[15%] -top-[7%] h-96 w-80 bg-darkGreen p-1">
            <Image
              src="/Steve-white.jpeg"
              className="object-cover"
              fill
              alt="Stephen-udo"
            />
          </div>
        </div>
      </div>

      <div className="bg-darkGray w-full lg:w-2/3">
        <div className="flex justify-center items-center gap-32 lg:gap-64 py-2 lg:py-8">
          <h1 className="text-4xl font-bold">About Me</h1>
          <hr className="border-2 flex-1 border-lightGreen" />
        </div>

        <div className="mt-10 lg:mt-20 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            veniam harum! At sed sit amet cumque dolore quos, consectetur omnis?
            Quisquam, optio repudiandae. Maxime soluta et distinctio sequi
            deleniti aut. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Magnam alias repellendus, provident in ipsum voluptatibus?
            Laudantium voluptatem similique sit modi. Rem similique magni
            voluptatum unde facilis cupiditate numquam, ullam aspernatur!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam est
            asperiores, neque, dolorum ratione praesentium possimus corrupti
            aperiam esse facere suscipit non cum quam corporis quibusdam
            perspiciatis nihil delectus! Sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            maiores magni, in nisi accusamus eligendi nemo ab, nulla quaerat.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam est
            asperiores, neque, dolorum ratione praesentium possimus corrupti
            aperiam esse facere suscipit non cum quam corporis quibusdam
            perspiciatis nihil delectus! Sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            maiores magni, in nisi accusamus eligendi nemo ab, nulla quaerat.
          </p>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            type="button"
            className="basis-36 py-3 bg-lightGreen text-darkGray cursor-pointer"
          >
            Hire Me
          </button>
          <button
            type="button"
            className="basis-36 py-3 bg-darkGray outline outline-lightGreen text-offWhite cursor-pointer"
          >
            Download CV
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
