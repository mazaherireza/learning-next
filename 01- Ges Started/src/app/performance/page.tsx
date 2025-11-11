import performanceImg from "../../../public/home.jpg";
import Hero from "@/components/hero/hero";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="Welding"
        title="We Serve High Performance Applications"
      />
    </div>
  );
}
