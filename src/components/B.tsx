"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LottieAnimation from "@/components/LottieAnimation";

const elementVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const B: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textElements = [
    "Promotions",
    "Staff Training",
    "Social Media Presence",
    "Voice of Customer",
    "Feedback Analysis"
  ];

  return (
    <div ref={ref} className="md:flex items-center">
      <motion.div
        className="w-full md:w-1/2 flex justify-start space-x-5 md:space-x-10 md:ml-80 "
        initial="hidden"
        animate={controls}
        variants={elementVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="md:w-16 md:h-16 w-12 h-12 rounded-full bg-purple-500 ml-5 md:ml-0"></div>
        <div>
          <h1 className="font-bold text-5xl md:text-7xl text-black mb-8">Business</h1>
          <div className="md:text-2xl text-xl tracking-wide text-black font-medium ml-5">
            {textElements.map((text, index) => (
              <motion.p
                key={index}
                initial="hidden"
                animate={controls}
                variants={elementVariants}
                transition={{ duration: 0.5, delay:index * 0.1 }}
                className="mb-5"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        animate={controls}
        variants={elementVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <LottieAnimation animationPath="/Assets/business.json" />
      </motion.div>
    </div>
  );
};

export default B;
