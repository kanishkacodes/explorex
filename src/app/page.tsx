import Image from "next/image";
import Hero from "@/components/Hero";
import Workedwith from "@/components/Workedwith";
import Hero2 from "@/components/Hero2";
import Herom from "@/components/Herom";
import Design from "@/components/Design";
import Technology from "@/components/Technology";
import Business from "@/components/Business";
import Hero3 from "@/components/Hero3";
import Cardmain from "@/components/Cardmain";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
    <Hero />
    <Workedwith />
    <Hero2/>
    <Design/>
    <Technology
    />
    <Business/>
    <Hero3/>
    <Cardmain/>
    <Faq/>

    {/* <Herom/> */}
    </>
  );
}
