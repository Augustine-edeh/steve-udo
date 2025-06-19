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
    <SectionWrapper className="flex-col justify-center gap-10 px-5 lg:px-40 bg-pink-500 ">
      <h1 className="text-4xl font-bold">Recent Projects</h1>

      <div className="flex-1 flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap gap-10 bg-orange-500">
        {recentProjects.map((project) => (
          <div key={project.title} className="size -64 bg-green-500 p-1">
            <div className="size-80 lg:size-80 bg-amber-300">
              <Image
                src={project.src}
                // className="object-cover"
                width={384}
                height={384}
                // fill
                alt={project.title}
              />
            </div>

            <h5 className="uppercase font-bold text-2xl">{project.title}</h5>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default RecentProjects;
