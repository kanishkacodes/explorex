"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const delays = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7];

function Design() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="" id="Services">
      <div className="md:flex justify-center md:space-x-40 mt-20 md:mt-28">
        <div className="flex justify-center mr-20 md:mr-0" ref={ref}>
          <motion.main
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-16 md:h-16 w-12 h-12 rounded-full bg-red-500"
          ></motion.main>

          <div>
            <motion.h1
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ml-10 font-bold tracking-wide text-5xl md:text-7xl text-black"
            >
              Design
            </motion.h1>
            <div className="ml-14 mt-8 mb-8">
              {["UI Design", "UX Design", "UX Consultancy", "Design System", "Animation", "Illustrations"].map((text, index) => (
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
          className="md:w-1/3"
        >
          <LottieAnimation animationPath="/Assets/Design.json" />
        </motion.div>
      </div>
    </div>
  );
}

export default Design;
