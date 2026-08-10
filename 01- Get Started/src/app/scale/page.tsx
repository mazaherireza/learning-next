import type { ReactNode } from "react";

import scaleImg from "../../../public/scale.jpg";

import HeroComponent from "@/components/hero/hero.component";

export default function Page(): ReactNode {
  return (
    <div>
      <HeroComponent
        imgData={scaleImg}
        imgAlt="Steel Factory"
        title="Scale Your App To Infinity"
      />
    </div>
  );
}
