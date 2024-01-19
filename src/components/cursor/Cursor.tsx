"use client";
import { useCallback, useEffect } from "react";
import styles from "./style.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorSize = 45;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const smoothOptionsSide = { damping: 10, stiffness: 100, mass: 0.5 };
  const smoothMouseSide = {
    x: useSpring(mouse.x, smoothOptionsSide),
    y: useSpring(mouse.y, smoothOptionsSide),
  };
  const manageMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    },
    [mouse.x, mouse.y]
  );

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove]);
  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className={styles.cursor}
      ></motion.div>
      <motion.div
        style={{
          left: smoothMouseSide.x,
          top: smoothMouseSide.y,
        }}
        className={styles.cursor__side}
      ></motion.div>
    </div>
  );
}
