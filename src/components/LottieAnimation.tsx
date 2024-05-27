"use client"
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

interface LottieAnimationProps {
  animationPath: string;
  mobileHeight?: number;
  mobileWidth?: number;
  desktopHeight?: number;
  desktopWidth?: number;
  alignment?: 'left' | 'center' | 'right'; // Define alignment prop
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ 
  animationPath, 
  alignment = 'left' // Default alignment is left
}) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(animationPath);
        const data = await response.json();
        setAnimationData(data);
      } 
      catch (error) {
        console.error('Error loading animation:', error);
      }
    };

    fetchAnimationData();
  }, [animationPath]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const alignmentClassName = alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : '';

  return (
    <div className={`inline-block ${alignmentClassName}   w-5/5`}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieAnimation;
