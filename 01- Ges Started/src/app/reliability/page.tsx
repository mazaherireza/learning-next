import reliabilityImg from "../../../public/reliability.jpg";
import Hero from "@/components/hero/hero";

export default function ReliablilityPage() {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt="welding"
        title="Super High Reliability Hosting"
      />
    </div>
  );
}
