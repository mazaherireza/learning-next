import scaleImg from "../../../public/scale.jpg";

import HeroComponent from "@/components/hero/hero.component";

export default function Page() {
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
