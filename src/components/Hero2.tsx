"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Hero2() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="ml-5 mr-5 md:mt-80 md:ml-72 md:mr-72">
      <div className="mt-10">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-bold md:text-5xl text-3xl text-black"
        >
          We are a global creative agency that combines design expertise with technology and intelligence.
        </motion.h1>
      </div>

      <div>
        <div className="flex justify-center" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <LottieAnimation animationPath="/Assets/Animation.json" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
