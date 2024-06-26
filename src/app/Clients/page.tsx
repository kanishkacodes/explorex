"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const imageVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const Workedwith: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //tmc.png

  const images = [
    '/client/explorex.png',
    '/client/sathyas.png',
    '/client/parika.png',
    '/client/kudla.png',
    '/client/uptown.png',
    '/client/TBC.png',
    '/client/gourmet.png',
    '/client/tmc.png',
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-[25rem] md:h-[35rem] items-center justify-center mt-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center"
        >
          <div className="font-bold tracking-wide text-3xl md:text-6xl text-black mb-10 md:mb-20">
            Our Clients
          </div>
        </motion.div>
        <div className="grid grid-cols-3 md:gap-10 justify-center">
          {images.map((src, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-32 md:w-96 mb-5 mx-2"
            >
              <Image
                src={src}
                alt={`Logo ${index + 1}`}
                width={1800}
                height={400}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Workedwith);
