"use client";
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
    <div className="ml-5 mr-5 xl:mt-80 2xl:mt-80 xl:ml-72 2xl:ml-72 xl:mr-72 2xl:mr-72">
      <div className="mt-10">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-bold xl:text-5xl 2xl:text-5xl text-3xl text-black"
        >
          We are a unique creative agency that combines design expertise with technology, data and intelligence.
        </motion.h1>
      </div>

      <div>
        <div className="flex justify-center" ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full xl:w-3/5 2xl:w-3/5"
          >
            <LottieAnimation animationPath="/Assets/Animation.json" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
