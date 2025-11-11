import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero({ imgData, imgAlt, title }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-1 inset-0">
        <Image src={imgData} alt={imgAlt} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900"></div>
      </div>
      <div className="pt-48 px-4 flex justify-center items-center">
        <h1 className="text-white text-xl sm:text-2xl md:text-6xl">{title}</h1>
      </div>
    </div>
  );
}
