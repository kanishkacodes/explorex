"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LottieAnimation from "@/components/LottieAnimation";

const textVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const Page: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <Navbar />
      <div className="px-4 h-[50rem] mt-14">
        <div className="flex flex-col items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.0, delay: 0.0 }}
            className="md:w-1/5"
          >
            <LottieAnimation animationPath="/Assets/About.json" />
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-center  md:w-3/5"
          >
            <div className="font-bold tracking-wide text-3xl md:text-6xl text-black md:mb-8 mb-4">
              About Us
            </div>
          </motion.div>

          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-lg md:text-2xl tracking-wide text-neutral-600  font-medium md:w-3/5"
          >
            Thinkfluence is a premier bespoke consultancy firm focusing only
            in the Hospitality domain. We are an extension of Explorex, which
            is India&apos;s leading full stack OS which helps in managing your
            restaurant more efficiently thereby helping you generate more
            revenue. We specialise in Performance Marketing thereby generating
            more ROl on your spend, and helping segment & target more
            effectively. Parallel we believe in crafting unforgettable
            experiences and optimising operations for businesses in the
            world of hospitality.
          </motion.p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;