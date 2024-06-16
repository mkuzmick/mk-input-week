"use client";

import React, { useEffect, useRef } from "react";
import styles from "./InteractiveComponent.module.css";

const InteractiveComponent: React.FC = () => {
  const interBubbleRef = useRef<HTMLDivElement>(null);
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    if (interBubbleRef.current) {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }
    requestAnimationFrame(move);
  };

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("mousemove", (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });
    };
  }, []);

  return (
    <div className={styles.gradientBg}>
      <div className={styles.gradientsContainer}>
        <div className={styles.g1}></div>
        <div className={styles.g2}></div>
        <div className={styles.g3}></div>
        <div className={styles.g4}></div>
        <div className={styles.g5}></div>
        <div ref={interBubbleRef} className={styles.interactive}></div>
      </div>
      <div className={styles.textContainer}>Your Text Here</div>
    </div>
  );
};

export default InteractiveComponent;
