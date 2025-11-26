import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import fileIcon from "../assets/icons/file.ico";
import { FaArrowLeft, FaArrowRight, FaBriefcase } from "react-icons/fa";
import XPExplorerSidebar from "./XPExplorerSidebar";
import bckIcon from "../assets/icons/bck.ico";
import fwdIcon from "../assets/icons/fwd.ico";

const Experience = () => {
  return (
    <div id="experience" className="h-full w-full px-6 lg:px-32 py-4 lg:py-8">
      {/* Windows Explorer Theme */}
      <div className="bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md h-full flex flex-col">
        {/* Title Bar */}
        <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] shrink-0 select-none">
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-white drop-shadow-md" />
            <span className="text-white font-bold text-[13px] tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Tahoma' }}>My Work History</span>
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
        <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-2 py-1 flex gap-4 text-xs font-tahoma text-black shrink-0">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Favorites</span>
          <span>Tools</span>
          <span>Help</span>
        </div>





        {/* Toolbar (Simplified) */}
        <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-2 py-2 flex gap-2 items-center overflow-x-auto shrink-0">
          <div className="flex gap-1 flex-shrink-0">
            <div className="w-4 h-4 flex items-center justify-center hover:brightness-110 active:brightness-90 cursor-pointer">
              <img src={bckIcon} alt="Back" className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="w-4 h-4 flex items-center justify-center hover:brightness-110 active:brightness-90 cursor-pointer">
              <img src={fwdIcon} alt="Forward" className="w-full h-full object-contain drop-shadow-sm" />
            </div>
          </div>
          <div className="h-6 border-l border-gray-400 mx-1 flex-shrink-0"></div>
          <div className="flex-1 bg-white border border-[#7F9DB9] px-2 py-0.5 h-[22px] flex items-center overflow-hidden whitespace-nowrap">
            <span className="text-xs font-tahoma text-black">Address</span>
            <span className="ml-2 text-gray-600 truncate text-xs font-tahoma">C:\Users\Jiming\Experience</span>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden border-t border-[#828790]">
          {/* Sidebar */}
          <XPExplorerSidebar />

          {/* Main Content */}
          <div className="flex-1 bg-white p-2 lg:p-4 overflow-y-auto">
            <div className="space-y-4">
              {EXPERIENCES.map((experience, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  className="flex flex-wrap lg:justify-center p-2 hover:bg-[#E8F1FC] border border-transparent hover:border-[#7F9DB9] rounded-sm cursor-default group"
                >
                  <motion.div
                    className="w-full lg:w-1/4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col items-center gap-1">
                        <img src={fileIcon} alt="File" className="w-5 h-5 object-contain group-hover:opacity-100 opacity-80" />
                        {/* Company Logo Placeholder */}
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-sm flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight p-1 shadow-sm border border-blue-800">
                          {experience.logo}
                        </div>
                      </div>
                      <p className="mb-2 text-sm text-[#0055EA] font-bold font-tahoma pt-2">{experience.year}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="w-full max-w-xl lg:w-3/4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                  >
                    <h6 className="mb-1 font-bold text-gray-800 font-tahoma text-sm">
                      {experience.role} - <span className="font-normal">{experience.company}</span>
                    </h6>
                    <p className="mb-2 text-gray-600 font-tahoma text-xs">{experience.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="rounded-sm bg-[#ECE9D8] border border-[#D1D1D1] px-1.5 py-0.5 text-[10px] font-tahoma text-black"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
