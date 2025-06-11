import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { Globe, Mail, MoveRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <SectionWrapper className="flex-col lg:flex-row bg-yellow-500 relative overflow-hidden">
      <div className="flex flex-col bg-darkGray p-10 h-dvh w-full lg:w-2/3">
        <h2>PORTFOLIO.</h2>

        <div className="flex-1 flex flex-col justify-center  lg:px-16 bg -blue-500">
          <h3 className="text-green-600 darkGreen">Hello Everyone.</h3>
          <h1 className="mt-8 lg:mt-4 flex flex-col text-6xl font-bold">
            I&apos;M STEPHEN <span className="mx-auto lg:mx-0">UDO</span>
          </h1>

          <div className="mt-10 lg:mt-8 mx-auto lg:mx-0 space-y-4 lg:space-y-2">
            <div className="flex w-fit gap-1 p-0.5 bg-lightGreen">
              <span className="w-44 p-1 bg-darkGray">
                GRAPHIC, UI/UX DESIGNER
              </span>
              <button>
                <MoveRight className="text-black" />
              </button>
            </div>
            <div className="flex w-fit gap-1 p-0.5 bg-lightGreen">
              <span className="w-44 p-1 bg-darkGray">
                DEVELOPER, DATA ANALYST
              </span>
              <button>
                <MoveRight className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lightGreen p-10 hidden lg:block  w-full lg:w-1/3">
        <div className="flex justify-between">
          <p className="text-black">Contact Me</p>

          <div className="flex gap-4">
            <Link
              href="#/contact"
              className="size-8 grid place-items-center bg-black text-offWhite rounded-full"
            >
              <Globe className="" />
            </Link>
            <Link
              href="#/contact"
              className="size-8 grid place-items-center bg-black text-offWhite rounded-full"
            >
              <Mail />
            </Link>
          </div>
        </div>
      </div>

      {/* Image Positioned at 2/3 Width (junction) */}
      <div className="hidden lg:block absolute left-[63.6667%] top-[84%] -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src="/Steve-pro.png"
          alt="Stephen Udo"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default Hero;
