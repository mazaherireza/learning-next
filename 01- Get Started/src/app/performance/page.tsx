import performanceImg from "../../../public/home.jpg";

import HeroComponent from "@/components/hero/hero.component";

export default function Page() {
  return (
    <div>
      <HeroComponent
        imgData={performanceImg}
        imgAlt="Welding"
        title="We Serve High Performance Applications"
      />
    </div>
  );
}
