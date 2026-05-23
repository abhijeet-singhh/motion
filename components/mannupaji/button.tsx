"use client";

import { motion } from "motion/react";

export const Button = () => {
  return (
    <div className="[perspective::1000px] [transform-style:preserve-3d] flex justify-center items-center min-h-screen bg-neutral-900">
      <motion.button
        whileHover={{ rotateX: 25, rotateY: 10 }}
        whileTap={{ y: 5 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ translateZ: 100 }}
        className="relative px-8 py-3 rounded-md bg-black text-neutral-300 cursor-pointer group hover:text-emerald-300 transition-colors duration-300"
      >
        Subscribe
        <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-emerald-500 to-transparent h-px z-100 w-3/4 mx-auto"></span>
        <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-emerald-500 to-transparent h-[4px] z-100 w-full mx-auto blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
      </motion.button>
    </div>
  );
};
