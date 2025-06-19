import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const RecentProjects = () => {
  const recentProjects = [
    {
      src: "/bicycle.jpeg",
      title: "Branding Design",
    },
    {
      src: "/bicycle.jpeg",
      title: "Website Designs",
    },
    {
      src: "/bicycle.jpeg",
      title: "Ui Desings",
    },
  ];

  return (
    // NOTE: undo justify-center later on
    // and add py-10 to sectionWrapper here

    <SectionWrapper className="flex-col justify-center gap-10 px-5 lg:px-40 bg-pink-500">
      <h1 className="text-4xl font-bold">Recent Projects</h1>

      <div className="w-full flex flex-wrap justify-center lg:justify-between gap-10 bg-orange-500">
        {recentProjects.map((project) => (
          <div key={project.title} className="size -64 bg-green-500 p-1">
            <div className="relative size-80 bg-amber-300">
              <Image
                src={project.src}
                fill
                className="object-cover w-full h-full"
                alt={project.title}
              />
            </div>

            <h5 className="mt-4 uppercase font-bold text-xl">
              {project.title}
            </h5>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default RecentProjects;
