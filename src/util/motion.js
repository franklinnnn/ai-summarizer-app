export const componentMotions = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.85,
    },
  },
  hide: {
    opacity: 0,
    y: -10,
  },
};

export const historyAnimation = (index) => {
  return {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "easeIn", duration: 0.85, delay: index * 0.175 },
    },
    exit: {
      opacity: 0,
    },
  };
};

export const featuresAnimation = (index) => {
  return {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "easeIn", duration: 0.85, delay: index * 0.175 },
    },
    exit: {
      opacity: 0,
    },
  };
};
