import Image from "next/image";
import Hero from "@/components/Hero";
import Workedwith from "@/components/Workedwith";
import Hero2 from "@/components/Hero2";
import Design from "@/components/Design";
import Technology from "@/components/Technology";
import Business from "@/components/Business";
import Hero3 from "@/components/Hero3";
import Cardmain from "@/components/Cardmain";
import Faq from "@/components/Faq";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import Star from "@/components/Star";
import Founder from "@/components/Founder";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Carda from "@/components/Carda";
import B from "@/components/B";
import T from "@/components/T";
import D from "@/components/D";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Workedwith/>
      <Hero2 />
      <Services />
      {/* <Design />
      <Technology />
      <Business /> */}
      <Hero3 />
      <Star />
     
      <Cardmain />
      {/* <Founder /> */}
      
      <Faq />
      
      
      <Impact />
      <Footer />
    </>
  );
}
