import type { ReactNode } from "react";

import reliabilityImg from "../../../public/reliability.jpg";

import HeroComponent from "@/components/hero/hero.component";

export default function Page(): ReactNode {
  return (
    <div>
      <HeroComponent
        imgData={reliabilityImg}
        imgAlt="Welding"
        title="Super High Reliability Hosting"
      />
    </div>
  );
}
