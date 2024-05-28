declare module 'react-lottie' {
    import { ComponentType } from 'react';
  
    interface Options {
      loop?: boolean;
      autoplay?: boolean;
      animationData: object;
      rendererSettings?: {
        preserveAspectRatio?: string;
        [key: string]: any;
      };
    }
  
    interface LottieProps {
      options: Options;
      height?: number | string;
      width?: number | string;
      isStopped?: boolean;
      isPaused?: boolean;
      eventListeners?: Array<{
        eventName: string;
        callback: () => void;
      }>;
      [key: string]: any;
    }
  
    const Lottie: ComponentType<LottieProps>;
    export default Lottie;
  }
  