import React from "react";
import aboutImg from "../assets/images/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaPencilAlt, FaEraser, FaFillDrip, FaSearch, FaPaintBrush, FaFont, FaShapes, FaSlash } from "react-icons/fa";
import { BsSlashLg, BsSquare, BsCircle, BsBoundingBoxCircles } from "react-icons/bs";
import { RiDragMove2Fill } from "react-icons/ri";

const About = () => {
    const tools = [
        { icon: <FaSlash className="rotate-90 text-[10px]" />, name: "Free-Form Select" },
        { icon: <BsBoundingBoxCircles className="text-[10px]" />, name: "Select" },
        { icon: <FaEraser className="text-[10px]" />, name: "Eraser" },
        { icon: <FaFillDrip className="text-[10px]" />, name: "Fill With Color" },
        { icon: <FaSearch className="text-[10px]" />, name: "Pick Color" },
        { icon: <FaSearch className="text-[10px]" />, name: "Magnifier" },
        { icon: <FaPencilAlt className="text-[10px]" />, name: "Pencil" },
        { icon: <FaPaintBrush className="text-[10px]" />, name: "Brush" },
        { icon: <FaSlash className="text-[10px]" />, name: "Airbrush" },
        { icon: <FaFont className="text-[10px]" />, name: "Text" },
        { icon: <BsSlashLg className="text-[10px]" />, name: "Line" },
        { icon: <FaShapes className="text-[10px]" />, name: "Curve" },
        { icon: <BsSquare className="text-[10px]" />, name: "Rectangle" },
        { icon: <FaShapes className="text-[10px]" />, name: "Polygon" },
        { icon: <BsCircle className="text-[10px]" />, name: "Ellipse" },
        { icon: <BsSquare className="rounded-sm text-[10px]" />, name: "Rounded Rectangle" },
    ];

    const colors = [
        "#000000", "#808080", "#800000", "#808000", "#008000", "#008080", "#000080", "#800080", "#808040", "#004040", "#0080FF", "#004080", "#8000FF", "#804000",
        "#FFFFFF", "#C0C0C0", "#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FFFF80", "#00FF80", "#00FFFF", "#8080FF", "#FF80FF", "#FF8040"
    ];

    return (
        <div id="about" className="pb-4 px-4">
            {/* XP Window Style Container */}
            <div className="mt-8 bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md flex flex-col h-[600px]">
                {/* Title Bar */}
                <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] shrink-0">
                    <div className="flex items-center gap-2">
                        <FaPaintBrush className="text-white drop-shadow-md" />
                        <span className="text-white font-bold text-[13px] tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Tahoma' }}>untitled - Paint</span>
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
                <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-1 py-0.5 flex gap-2 text-xs font-tahoma text-black shrink-0">
                    {['File', 'Edit', 'View', 'Image', 'Colors', 'Help'].map((menu) => (
                        <div key={menu} className="px-2 py-0.5 hover:bg-[#316AC5] hover:text-white cursor-default">
                            {menu}
                        </div>
                    ))}
                </div>

                {/* Main Workspace */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Toolbar */}
                    <div className="w-[50px] bg-[#ECE9D8] border-r border-[#808080] p-1 flex flex-col gap-1 shrink-0">
                        <div className="grid grid-cols-2 gap-[2px]">
                            {tools.map((tool, index) => (
                                <div key={index} className="w-[20px] h-[20px] border border-white border-r-[#808080] border-b-[#808080] bg-[#ECE9D8] flex items-center justify-center active:border-[#808080] active:border-r-white active:border-b-white active:bg-gray-200 cursor-default" title={tool.name}>
                                    {tool.icon}
                                </div>
                            ))}
                        </div>
                        {/* Tool Options Placeholder */}
                        <div className="mt-2 flex-1 border border-[#808080] border-r-white border-b-white bg-white/50"></div>
                    </div>

                    {/* Canvas Area */}
                    <div className="flex-1 bg-[#808080] p-4 overflow-auto relative">
                        <div className="bg-white shadow-[2px_2px_0_rgba(0,0,0,0.2)] min-h-full min-w-full p-8 relative">
                            {/* Resize Handles */}
                            <div className="absolute right-0 bottom-0 w-1.5 h-1.5 bg-[#000080] cursor-nwse-resize"></div>
                            <div className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-[#000080] cursor-ew-resize"></div>
                            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-[#000080] cursor-ns-resize"></div>

                            {/* Content on Canvas */}
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                {/* Image Selection */}
                                <div className="relative group cursor-move">
                                    <div className="border border-dashed border-blue-500 p-1">
                                        <img src={aboutImg} alt="About Me" className="max-w-[250px] border border-gray-300" />
                                        {/* Selection Handles */}
                                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-black"></div>
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-black"></div>
                                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-black"></div>
                                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-black"></div>
                                    </div>
                                    <div className="absolute -top-6 left-0 bg-[#FFFFE1] border border-black px-1 text-[10px] hidden group-hover:block">
                                        Image: 250x300px
                                    </div>
                                </div>

                                {/* Text Box */}
                                <div className="flex-1 relative">
                                    <div className="border border-dashed border-gray-400 p-2 min-h-[200px]">
                                        <h2 className="text-2xl font-bold font-tahoma text-black mb-4 select-text">About Me</h2>
                                        <p className="font-tahoma text-sm text-black leading-relaxed whitespace-pre-wrap select-text">
                                            {ABOUT_TEXT}
                                        </p>
                                        {/* Text Cursor */}
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                            className="inline-block w-[1px] h-4 bg-black ml-1 align-middle"
                                        ></motion.span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Color Palette */}
                <div className="h-[46px] bg-[#ECE9D8] border-t border-[#D1D1D1] p-1 flex items-center gap-2 shrink-0">
                    {/* Selected Colors */}
                    <div className="w-[30px] h-[30px] border border-[#808080] border-r-white border-b-white relative bg-white shadow-[inset_1px_1px_0_#808080]">
                        <div className="absolute top-1 left-1 w-[12px] h-[12px] bg-black border border-gray-500 z-10"></div>
                        <div className="absolute bottom-1 right-1 w-[12px] h-[12px] bg-white border border-gray-500"></div>
                    </div>

                    {/* Color Grid */}
                    <div className="flex flex-col gap-[1px]">
                        <div className="flex gap-[1px]">
                            {colors.slice(0, 14).map((color, i) => (
                                <div key={i} className="w-[14px] h-[14px] border border-[#808080] border-r-white border-b-white cursor-pointer" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                        <div className="flex gap-[1px]">
                            {colors.slice(14).map((color, i) => (
                                <div key={i} className="w-[14px] h-[14px] border border-[#808080] border-r-white border-b-white cursor-pointer" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="h-[20px] bg-[#ECE9D8] border-t border-[#D1D1D1] flex items-center px-2 text-[11px] text-[#444] font-tahoma gap-4 shrink-0">
                    <span className="flex-1">For Help, click Help Topics on the Help Menu.</span>
                    <div className="border-l border-[#808080] pl-2 w-24">125, 45</div>
                </div>
            </div>
        </div>
    );
};

export default About;