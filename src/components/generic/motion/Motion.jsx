"use client";
import { motion } from "framer-motion";

export const Motion = ({
  delay = "0.1",
  duration = "0.5",
  x = -100,
  y = 0,
  scale = [1, 1],
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: x, y: y }}
      animate={{ x: 0, y: 0 }}
      transition={{ ease: "linear", duration: duration, delay: delay }}
      whileInView={{ opacity: 1, scale: scale }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
