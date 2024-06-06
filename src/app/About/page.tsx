"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Dynamically import the LottieAnimation component
const LottieAnimation = dynamic(() => import("@/components/LottieAnimation"), { ssr: false });

const textVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="">
      <Navbar />
      <div className="md:flex justify-center space-x-0 mt-10 mx-4 md:mx-0 my-8 md:mb-40 md:mt-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mr-0 md:mr-9 w-full md:w-auto"
        >
          {inView && <LottieAnimation animationPath="/Assets/Clients.json" />}
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-full md:w-1/3 mt-8 md:mt-0" // Adjusted margin top for mobile view
        >
          <h1 className="font-bold tracking-wide text-3xl md:text-6xl text-black md:mb-8 mb-4">About Us</h1>
          <p className="text-lg md:text-xl tracking-wide text-neutral-600">
            Thinkfluence is a premier bespoke consultancy firm focusing only in the Hospitality domain. We are an extension
            of Explorex, which is India&apos;s leading full stack OS which helps in managing your restaurant more efficiently
            thereby helping you generate more revenue. We specialise in Performance Marketing thereby generating more ROl
            on your spend, and helping segment & target more effectively. Parallel we believe in crafting unforgettable
            experiences and optimising operations for businesses in the world of hospitality.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(Hero);
