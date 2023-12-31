import About from "@/components/About";
import Apartments from "@/components/Apartments";
import Facilities from "@/components/Facilities";
import GetIn from "@/components/GetIn";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Apartments />
      <Facilities />
    </main>
  );
}
