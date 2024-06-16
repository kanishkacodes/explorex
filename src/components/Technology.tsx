// Technology.tsx
"use client";
import React, { useEffect, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

// Dynamic import of the LottieAnimation component
const LottieAnimation = dynamic(() => import("@/components/LottieAnimation"), { ssr: false });

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const delays = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];

function Technology() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="ml-3 2xl:ml-0">
      <div className="2xl:flex justify-center mt-20 2xl:mt-28">
        <div className="flex justify-center" ref={ref}>
          <motion.main
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="2xl:w-16 2xl:h-16 w-12 h-12 rounded-full bg-blue-500 flex justify-end"
          ></motion.main>

          <div>
            <motion.h1
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="ml-10 font-bold text-5xl 2xl:text-7xl text-black"
            >
              Technology
            </motion.h1>
            <div className="ml-14 mt-8 mb-8">
              {["Web Design", "Softwares", "Mobile Apps", "Menu Engineering", "Customer Data-Analysis"].map((text, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={textVariants}
                  transition={{ duration: 0.4, delay: delays[index] }}
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
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center"
        >
          <Suspense fallback={<div>Loading animation...</div>}>
            <LottieAnimation animationPath="/Assets/Coding.json" />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(Technology);
