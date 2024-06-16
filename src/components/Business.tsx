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

function Business() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="ml-3 2xl:ml-0">
      <div className="2xl:flex justify-center 2xl:space-x-20 mt-20 2xl:mt-28">
        <div className="flex justify-center mr-16 2xl:mr-0" ref={ref}>
          <motion.main
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="2xl:w-16 2xl:h-16 w-12 h-12 rounded-full bg-purple-500 flex justify-end"
          ></motion.main>

          <div>
            <motion.h1
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ml-10 font-bold text-5xl 2xl:text-7xl text-black"
            >
              Business
            </motion.h1>
            <div className="ml-14 mt-8 mb-8">
              {["Promotions", "Staff Training", "Social Media Presence", "Voice of Customer", "Feedback Analysis"].map((text, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: delays[index] }}
                  className="mt-5 mb-5 2xl:text-2xl text-xl tracking-wide text-black font-medium"
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
          className="flex justify-center"
        >
          <LottieAnimation animationPath="/Assets/business.json" />
        </motion.div>
      </div>
    </div>
  );
}

export default Business;
