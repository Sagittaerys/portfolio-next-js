// import Image from "next/image";
import Intro from "@/Components/Intro";
import AboutMe from "@/Components/About-Me";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <div>
        <Intro />
        <AboutMe />
        <Services />
        <Skills />
    </div>
  );
}
