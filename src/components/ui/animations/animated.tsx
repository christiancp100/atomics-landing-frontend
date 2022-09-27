import React, { useEffect } from 'react';
import { HTMLMotionProps, motion, useAnimation, Variant } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export type Animation = {
  initial: Variant;
  final: Variant;
};

interface Props extends HTMLMotionProps<'div'> {
  animation: Animation;
  activateOnScroll?: boolean;
  replay?: boolean;
}

const Animated: React.FC<Props> = ({
  activateOnScroll = true,
  replay = true,
  children,
  animation,
  ...rest
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start(`final`);
    } else {
      replay && control.start(`initial`);
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="initial"
      animate={activateOnScroll ? control : `final`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
