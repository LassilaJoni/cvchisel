import { ThemeToggle } from "@/components/Themetoggle";
import { HeroSection } from "@/components/heroSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      <ThemeToggle />
      <HeroSection />
    </div>
  );
}
