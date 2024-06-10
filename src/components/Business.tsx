"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

// Dynamically import the LottieAnimation component
const LottieAnimation = dynamic(() => import("@/components/LottieAnimation"), { ssr: false });

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
    <div className="ml-3 md:ml-0">
      <div className="md:flex justify-center md:space-x-20 mt-20 md:mt-28">
        <div className="flex justify-center mr-16 md:mr-0" ref={ref}>
          <motion.main
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:w-16 md:h-16 w-12 h-12 rounded-full bg-purple-500 flex justify-end"
          ></motion.main>

          <div>
            <motion.h1
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="ml-10 font-bold text-5xl md:text-7xl text-black"
            >
              Business
            </motion.h1>
            <div className="ml-14 mt-8 mb-8">
              {["Promotions", "Staff Training", "Social Media Presence", "Voice of Customer", "Customer Sentiment Analysis"].map((text, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={textVariants}
                  transition={{ duration: 0.4, delay: delays[index] }}
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
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {inView && <LottieAnimation animationPath="/Assets/business.json" />}
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(Business);
