import type { ReactNode } from "react";

import homeImg from "../../public/home.jpg";

import Hero from "@/components/hero/hero.component";

export default function Page(): ReactNode {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt="Car Factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
