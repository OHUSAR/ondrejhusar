import React, { useState, useEffect, useRef } from "react";
import styles from "../App.module.scss";

const TerminalLine: React.FC<{
  line: string;
  hideCursor?: boolean;
  speed?: number;
}> = React.memo(({ line, hideCursor, speed = 50 }) => {
  const [index, setIndex] = useState(-1);
  const [animate, setAnimate] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleIntersect: IntersectionObserverCallback = ([entry], observer) => {
    if (entry.isIntersecting) {
      setAnimate(true);
    } else {
      setIndex(-1);
      setAnimate(false);
    }
  };

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.99,
    };

    const element = ref.current!;

    observer.current = new IntersectionObserver(handleIntersect, options);
    observer.current.observe(element);

    return () => {
      if (observer.current) {
        observer.current.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const interval = setTimeout(() => {
        if (index < line.length + 1) {
          setIndex(index + 1);
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => {
        clearTimeout(interval);
      };
    }
  }, [index, animate, line, speed]);

  return (
    <div className={styles.line} ref={ref}>
      <span style={{ color: "#869BF0", fontSize: 20 }}>$</span>{" "}
      {index > -1 ? line.slice(0, index) : null}
      {!hideCursor ? <span className="blinking">|</span> : null}
    </div>
  );
});

export default TerminalLine;
