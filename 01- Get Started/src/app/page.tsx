import homeImg from "../../public/home.jpg";
import Hero from "@/components/hero/hero";

export default function HomePage() {
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
