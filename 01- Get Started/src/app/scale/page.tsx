import scaleImg from "../../../public/scale.jpg";
import Hero from "@/components/hero/hero";

export default function ReliablilityPage() {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        imgAlt="steel factory"
        title="Scale Your App To Infinity"
      />
    </div>
  );
}
