import Image from "next/image";

interface LayeredImage {
  src: string;
  alt: string;
}

const LayeredImage = ({ src, alt }: LayeredImage) => {
  return (
    <div className="flex relative">
      <div className="h-96 w-80 bg-lightGreen"></div>
      <div className="absolute left-[15%] -top-[7%] h-96 w-80 bg-darkGreen">
        <Image src={src} className="object-cover" fill alt={alt} />
      </div>
    </div>
  );
};

export default LayeredImage;
