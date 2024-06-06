"use client";
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

  const images = [
    '/client/explorex.png',
    '/client/sathyas.png',
    '/client/parika.png',
    '/client/kudla.png',
    '/client/uptown.png',
    '/client/TBC.png',
  ];

  return (
    <div className=" mt-7 ml-5 mr-5 md:ml-72 md:mr-72 mb-20">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-x-5 gap-y-0 justify-items-center">
        {images.map((src, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-40  md:w-80  mb-5"
          >
            <Image src={src} alt={`Logo ${index + 1}`} width={1800} height={400} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Workedwith;
