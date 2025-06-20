import Image from "next/image";

import SectionWrapper from "./SectionWrapper";

const MyBestProjects = () => {
  const bestProjects = [
    {
      src: "/bicycle.jpeg",
      title: "Gadget Store App",
      alt: "gadget store app",
      category: "UI/UX Design",
      description:
        "A sleek and intuitive mobile app interface for a gadget store, focused on easy navigation and a smooth shopping experience.",
    },
    {
      src: "/coffee.jpeg",
      title: "Coffee Shop App",
      alt: "coffee shop app",
      category: "UI/UX Design",
      description:
        "A mordern and user-friendly app design for a coffess shop, making it easy for customers to browse the menu, place orders, and find nearby locations.",
    },
  ];

  return (
    <SectionWrapper className="flex-col bg-darkGray px-5 py-10">
      <h1 className="text-4xl font-bold">My Best Projects</h1>

      <div className="w-full flex flex-wrap justify-center lg:justify between gap-10 bg-purple-500">
        {bestProjects.map((project) => (
          <div
            key={project.title}
            className="bg-amber-600 w-80
          "
          >
            <div className="relative size-80 bg-amber-300">
              <Image
                src={project.src}
                fill
                className="object-cover w-full h-full"
                alt={project.title}
              />
            </div>

            <div className="px-3 pb-2">
              <h4 className="text-xl font-semibold my-3">{project.title}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MyBestProjects;
