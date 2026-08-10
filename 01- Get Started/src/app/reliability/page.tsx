import reliabilityImg from "../../../public/reliability.jpg";

import HeroComponent from "@/components/hero/hero.component";

export default function Page() {
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
