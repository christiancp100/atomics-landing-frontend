import Animated, { Animation } from './animated';

type AnimationType =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeIn'
  | 'fadeRight'
  | 'fadeLeft';

type Animations = {
  [key in AnimationType]: Animation;
};

export const animations: Animations = {
  fadeUp: {
    initial: { opacity: 0, y: 100 },
    final: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  },
  fadeDown: {
    initial: { opacity: 0, y: -20 },
    final: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  },
  fadeIn: {
    initial: { opacity: 0 },
    final: { opacity: 1, transition: { duration: 0.5 } },
  },
  fadeRight: {
    initial: { opacity: 0, x: -100 },
    final: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  },
  fadeLeft: {
    initial: { opacity: 0, x: 100 },
    final: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  },
};

export default Animated;
