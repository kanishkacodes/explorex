"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from 'next/image';

const data = [
  {
    srcImage1: "/star.png",
    srcImage2: "/pfp1.jpg",
    bigParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi. Cras fermentum odio eu feugiat pretium. Nunc non blandit massa enim nec dui. Sed id semper risus in hendrerit gravida rutrum quisque non.",
    constantHeading: "What Clients Say",
    name: "Alice Smith",
    designation: "CTO, Tech Innovators"
  },
  {
    srcImage1: "/star.png",
    srcImage2: "/pfp1.jpg",
    bigParagraph: "Amet cursus sit amet dictum sit amet. Euismod lacinia at quis risus sed vulputate odio ut. Neque volutpat ac tincidunt vitae semper quis lectus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Ultrices eros in cursus turpis massa tincidunt dui.",
    constantHeading: "What Clients Say",
    name: "Bob Johnson",
    designation: "CFO, Finance Gurus"
  },
  {
    srcImage1: "/star.png",
    srcImage2: "/pfp1.jpg",
    bigParagraph: "Vitae suscipit tellus mauris a diam maecenas sed. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Sed turpis tincidunt id aliquet risus feugiat. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Viverra adipiscing at in tellus integer feugiat scelerisque.",
    constantHeading: "What Clients Say",
    name: "Carol White",
    designation: "COO, Logistics Leaders"
  },
  {
    srcImage1: "/star.png",
    srcImage2: "/pfp1.jpg",
    bigParagraph: "Elementum integer enim neque volutpat ac tincidunt. Pellentesque pulvinar pellentesque habitant morbi tristique. Non sodales neque sodales ut etiam sit amet nisl purus. Tincidunt arcu non sodales neque sodales ut etiam sit. Magna fermentum iaculis eu non diam phasellus.",
    constantHeading: "What Clients Say",
    name: "David Brown",
    designation: "CMO, Marketing Masters"
  }
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const CardCarousel = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setCardIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && cardIndex < data.length - 1) {
      setCardIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && cardIndex > 0) {
      setCardIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white py-6 h-auto md:h-[20rem]">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${cardIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing h-full"
      >
        <Cards cardIndex={cardIndex} />
      </motion.div>
      <div className="">
      <Dots  cardIndex={cardIndex} setCardIndex={setCardIndex} />
      </div>
      <GradientEdges />
    </div>
  );
};

const Cards = ({ cardIndex }: { cardIndex: number }) => (
  <>
    {data.map((card, idx) => (
      <motion.div
        key={idx}
        style={{ scale: cardIndex === idx ? 0.95 : 0.85 }}
        transition={SPRING_OPTIONS}
        className="aspect-video w-screen shrink-0 flex justify-center items-center px-4"
      >
        <div className="max-w-4xl w-full mx-auto p-8 bg-gray-200 mb-6 rounded-md shadow-md">
          <div className="md:flex">
            <div className="md:flex-shrink-0 text-center ">
                <div className=" flex justify-center">
              <Image className="rounded-full" src={card.srcImage2} alt="Profile Picture" width={100} height={100} />
                </div>
              <div className="mt-4">
                <p className="text-lg font-semibold">{card.name}</p>
                <p className="text-black">{card.designation}</p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6">
              <h1 className="text-xl font-bold mb-4">{card.constantHeading}</h1>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Image key={index} src={card.srcImage1} alt="Star" width={20} height={20} />
                ))}
              </div>
              <p className="text-black">{card.bigParagraph}</p>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </>
);

const Dots = ({
  cardIndex,
  setCardIndex,
}: {
  cardIndex: number;
  setCardIndex: Dispatch<SetStateAction<number>>;
}) => (
  <div className=" flex w-full justify-center gap-2">
    {data.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCardIndex(idx)}
        className={`h-3 w-3 rounded-full transition-colors ${idx === cardIndex ? "bg-blue-500" : "bg-blue-100"}`}
      />
    ))}
  </div>
);

const GradientEdges = () => (
  <>
    <div  />
    <div  />
  </>
);

export default CardCarousel;

//className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0"
//className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0"
