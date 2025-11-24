import React from "react"
import aboutImg from "../assets/images/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="about" className="pb-4 px-4">
            {/* XP Window Style Container */}
            <div className="mt-8 bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md">
                {/* Title Bar */}
                <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-white rounded-sm opacity-50"></div>
                        <span className="text-white font-bold text-[13px] tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Tahoma' }}>About Me - User Profile</span>
                    </div>
                    <div className="flex gap-1">
                        {/* Minimize */}
                        <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-end justify-center pb-1 hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
                            <div className="w-2 h-[2px] bg-white shadow-sm"></div>
                        </button>
                        {/* Maximize */}
                        <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
                            <div className="w-[9px] h-[9px] border-[2px] border-white shadow-sm"></div>
                        </button>
                        {/* Close */}
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
                <div className="p-6 bg-white">
                    <h2 className="mb-8 text-center text-3xl text-gray-800 font-tahoma tracking-tight">
                        About
                        <span className="text-[#0055EA]"> Me</span>
                    </h2>

                    <div className="flex flex-wrap items-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/2 lg:p-8 flex justify-center"
                        >
                            {/* Image with XP "Inset" Border */}
                            <div className="bg-white p-1 border-2 border-[#828790] border-r-white border-b-white shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]">
                                <img className="max-w-[200px] lg:max-w-[300px] border border-gray-400" src={aboutImg} alt="about" />
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/2 mt-6 lg:mt-0"
                        >
                            <div className="flex justify-center lg:justify-start">
                                {/* Notepad Theme */}
                                <div className="w-full max-w-full lg:max-w-xl bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md">
                                    {/* Title Bar */}
                                    <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-white rounded-sm opacity-50"></div>
                                            <span className="text-white font-bold text-[13px] tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Tahoma' }}>AboutMe.txt - Notepad</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {/* Minimize */}
                                            <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-end justify-center pb-1 hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
                                                <div className="w-2 h-[2px] bg-white shadow-sm"></div>
                                            </button>
                                            {/* Maximize */}
                                            <button className="w-[21px] h-[21px] bg-[#288EFF] border border-white/60 rounded-[3px] flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
                                                <div className="w-[9px] h-[9px] border-[2px] border-white shadow-sm"></div>
                                            </button>
                                            {/* Close */}
                                            <button className="w-[21px] h-[21px] bg-[#E0422E] border border-white/60 rounded-[3px] flex items-center justify-center hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,150,150,0.5)]">
                                                <span className="text-white text-[13px] font-bold leading-none mb-[1px] shadow-sm">×</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Menu Bar */}
                                    <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-1 py-0.5 flex gap-2 text-xs font-tahoma text-black overflow-x-auto">
                                        <span className="px-1 hover:bg-[#316AC5] hover:text-white cursor-default">File</span>
                                        <span className="px-1 hover:bg-[#316AC5] hover:text-white cursor-default">Edit</span>
                                        <span className="px-1 hover:bg-[#316AC5] hover:text-white cursor-default">Format</span>
                                        <span className="px-1 hover:bg-[#316AC5] hover:text-white cursor-default">View</span>
                                        <span className="px-1 hover:bg-[#316AC5] hover:text-white cursor-default">Help</span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 h-full min-h-[200px] overflow-y-auto font-mono text-sm text-black leading-relaxed whitespace-pre-wrap">
                                        {ABOUT_TEXT}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;