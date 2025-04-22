const mockMotion = {
  div: "div",
  h1: "h1",
  h2: "h2",
  p: "p",
  span: "span",
  img: "img",
  a: "a",
};

const noop = () => false;

// Framer motion compatibility layer (for static/server-side rendering)
export const motion = new Proxy(mockMotion, {
  get: (target, prop) => {
    if (prop in target) {
      return target[prop as keyof typeof target];
    }
    return "div"; // Default to div for any other elements
  },
});

// Mock animation functions
motion.div = "div";
motion.h1 = "h1";
motion.p = "p";

// Add animation properties
const animationProps = {
  initial: noop,
  animate: noop,
  exit: noop,
  transition: noop,
  variants: noop,
  whileHover: noop,
  whileTap: noop,
  whileInView: noop,
};

// Apply animation properties to all elements
Object.keys(mockMotion).forEach(key => {
  Object.assign(motion[key as keyof typeof mockMotion], animationProps);
});