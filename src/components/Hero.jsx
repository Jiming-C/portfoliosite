// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import Typed from "typed.js";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const containerRight = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  // Create a ref for the element where the typed effect will appear
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Software Engineer",
        "Full Stack Developer",
        "Project Manager",
        "Problem Solver",
        "Business Owner",
        "Entrepreneur",
        "Leader",
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    // Cleanup Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-8">
      <div className="flex flex-wrap">
        {/* Left/Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-7xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Jiming Chen
            </motion.h1>
            <motion.span
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              // Added animate-gradient class here to animate the gradient colors
              className="animate-gradient bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {/* This span will be populated by Typed.js */}
              <span ref={typedElement} />
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-20 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right/Image Section (currently commented out) */}
        {/*
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              variants={containerRight(0.6)}
              initial="hidden"
              animate="visible"
              className="rounded-2xl"
              src={profilePic}
              alt="ProfilePic"
            />
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Hero;
