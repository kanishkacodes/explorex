"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


function Hero3() {

    const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="ml-5 mr-5 md:ml-72 md:mr-72 ">
      <div className="mt-10"  ref={ref}>
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-bold md:text-5xl text-3xl text-black"
        >
          As global leaders in UX UI, technology, and business solutions, we partner with clients to simplify, strengthen, and transform their businesses.
        </motion.h1>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Hero3
