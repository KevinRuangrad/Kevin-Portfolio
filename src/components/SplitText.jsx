import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SplitText = (
  {
    text,
    className,
    delay,
    animationFrom,
    animationTo,
    easing,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  },
) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = Array.from(textRef.current.children);
    letters.forEach((letter, index) => {
      letter.style.transitionDelay = `${delay * index}ms`;
      letter.style.opacity = animationFrom.opacity;
      letter.style.transform = animationFrom.transform;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            letters.forEach((letter) => {
              letter.style.opacity = animationTo.opacity;
              letter.style.transform = animationTo.transform;
            });
            if (onLetterAnimationComplete) {
              onLetterAnimationComplete();
            }
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  }, [
    delay,
    animationFrom,
    animationTo,
    easing,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <span ref={textRef} className={className}>
      {text.split("").map((letter, index) => (
        <motion.span key={index} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

SplitText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  animationFrom: PropTypes.object,
  animationTo: PropTypes.object,
  easing: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  onLetterAnimationComplete: PropTypes.func,
};

export default SplitText;
