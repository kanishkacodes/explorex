"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Minimized delays while maintaining proportional differences
const delays = [0.2, 0.3, 0.4, 0.6, 0.9, 1.0];

function Technology() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="ml-3 md:ml-0">
      <div className="md:flex justify-center mt-20 md:mt-28">
        <div className="flex justify-center" ref={ref}>
          <motion.main
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-16 md:h-16 w-12 h-12 rounded-full bg-blue-500 flex justify-end"
          ></motion.main>

          <div>
            <motion.h1
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ml-10 font-bold text-5xl md:text-7xl text-black"
            >
              Technology
            </motion.h1>
            <div className="ml-14 mt-8 mb-8">
              {["Web Design", "Softwares", "Mobile Apps", "Web Apps", "Front-End", "Back-End"].map((text, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: delays[index] }}
                  className="mt-5 mb-5 md:text-2xl text-xl tracking-wide text-black font-medium"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <LottieAnimation animationPath="/Assets/Coding.json" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technology;
