"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";
import { useInView } from "react-intersection-observer";

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
    <div>
      <div className="md:flex justify-center space-x-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mr-0 md:mr-6 lg:mr-9 flex lg:justify-start justify-center"
        >
          <LottieAnimation animationPath="/Assets/OnlineChat.json" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
          
        >
          <h1 className="font-bold tracking-wide text-5xl md:text-6xl lg:text-7xl text-black mt-0 md:mt-14 lg:mt-28">
            Design
          </h1>
          <h1 className="font-bold tracking-wide text-5xl md:text-6xl lg:text-7xl text-black">
            Transform
          </h1>
          <h1 className="font-bold tracking-wide text-5xl md:text-6xl lg:text-7xl text-black">
            Accelerate
          </h1>
          <p className="text-2xl md:text-3xl tracking-wide text-black font-medium mt-5">
            We Revolutionize Customer Experience
          </p>
          <p className="text-2xl md:text-3xl tracking-wide text-black font-medium">
            Using Technology, Data & Science.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
