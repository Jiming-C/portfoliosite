// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/profilepic.png";
import usersIcon from "../assets/icons/users.ico";
import { motion } from "framer-motion";
import Typed from "typed.js";

const container = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay },
  },
});

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Software Engineer",
        "Full Stack Developer",
        "Product Manager",
        "Car Enthusiast",
        "Business Owner",
        "Photographer",
        "Leader"
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      startDelay: 500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="h-full w-full px-6 lg:px-32 py-4 lg:py-8">
      {/* User Accounts Control Panel Theme */}
      <div className="w-full h-full bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md flex flex-col">
        {/* Title Bar */}
        <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
          <div className="flex items-center gap-2">
            <img src={usersIcon} alt="User Accounts" className="w-4 h-4 object-contain" />
            <span className="text-white font-bold text-[13px] tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Tahoma' }}>User Accounts</span>
          </div>
          <div className="flex gap-1">
            <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-end justify-center pb-1 hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
              <div className="w-2 h-[2px] bg-white shadow-sm"></div>
            </button>
            <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
              <div className="w-[9px] h-[9px] border-[2px] border-white shadow-sm"></div>
            </button>
            <button className="w-[21px] h-[21px] bg-[#E0422E] border border-white/60 rounded-[3px] flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,150,150,0.5)]">
              <span className="text-white text-[13px] font-bold leading-none mb-[1px] shadow-sm">×</span>
            </button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-1 py-0.5 flex gap-2">
          {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map((menu) => (
            <div key={menu} className="px-2 py-0.5 hover:bg-[#316AC5] hover:text-white cursor-default text-sm font-tahoma">
              {menu}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-8 bg-white flex-1 overflow-y-auto">
          {/* Heading */}
          <motion.h2
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-3xl font-tahoma text-[#003399] mb-8"
          >
            What do you want to know about Jiming?
          </motion.h2>

          {/* User Profile Section */}
          <div className="flex items-start gap-6 mb-8">
            {/* Profile Picture */}
            <motion.div
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="flex-shrink-0"
            >
              <div className="w-32 h-32 border-2 border-[#7F9DB9] rounded-sm overflow-hidden shadow-sm">
                <img
                  src={profilePic}
                  alt="Jiming Chen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* User Info */}
            <motion.div
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="flex-1"
            >
              <h3 className="text-2xl font-bold font-tahoma text-black mb-2">
                Jiming Chen
              </h3>
              <div className="text-lg text-gray-700 mb-4 h-8 flex items-center font-tahoma">
                <span ref={typedElement} className="typed-text"></span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-tahoma">
                Computer Science Student
              </p>
            </motion.div>
          </div>

          {/* Bio Section */}
          <motion.div
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="border-t border-gray-300 pt-6"
          >
            <p className="text-sm text-gray-800 leading-relaxed font-tahoma">
              {HERO_CONTENT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
