import React from 'react';
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import XPExplorerSidebar from "./XPExplorerSidebar";
import { FaFolderOpen } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="pb-4 px-4">
      {/* XP Window Style Container - Static for embedding in page */}
      <div className="mt-8 bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md flex flex-col h-[800px]">
        {/* Title Bar */}
        <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] shrink-0">
          <div className="flex items-center gap-2">
            <FaFolderOpen className="text-white drop-shadow-md" />
            <span className="text-white font-bold text-[13px] tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Tahoma' }}>My Projects</span>
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
        <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-1 py-0.5 flex gap-2 shrink-0">
          {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map((menu) => (
            <div key={menu} className="px-2 py-0.5 hover:bg-[#316AC5] hover:text-white cursor-default text-sm font-tahoma">
              {menu}
            </div>
          ))}
        </div>

        {/* Address Bar */}
        <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-2 py-1 flex items-center gap-2 shrink-0">
          <span className="text-xs text-[#444]">Address</span>
          <div className="flex-1 bg-white border border-[#7F9DB9] h-[20px] flex items-center px-1 text-xs">
            C:\Documents and Settings\Jiming\My Documents\My Projects
          </div>
        </div>

        {/* Main Content Area (Explorer View) */}
        <div className="flex-1 flex bg-white overflow-hidden border-t border-[#828790]">
          {/* Sidebar */}
          <XPExplorerSidebar />

          {/* Details View */}
          <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
            {/* Grid Header */}
            <div className="px-4 py-2 border-b border-[#D1D1D1] bg-white shrink-0 flex gap-4 text-xs text-[#444] font-tahoma select-none">
              <div className="w-1/3 border-r border-[#D1D1D1] px-1">Name</div>
              <div className="w-1/3 border-r border-[#D1D1D1] px-1">Description</div>
              <div className="w-1/3 px-1">Technologies</div>
            </div>

            <div className="flex-1 overflow-y-auto p-2 bg-white">
              <div className="space-y-1">
                {PROJECTS.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row gap-4 p-2 hover:bg-[#E8F1FC] border border-transparent hover:border-[#7F9DB9] rounded-sm group"
                  >
                    {/* Image & Title */}
                    <div className="w-full md:w-1/3 flex gap-3 items-start">
                      <div className="w-16 h-16 shrink-0 border border-[#D1D1D1] bg-white p-1">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-black group-hover:underline cursor-pointer">{project.title}</h3>
                        <span className="text-xs text-gray-500">File Folder</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="w-full md:w-1/3 text-xs text-black font-tahoma leading-relaxed">
                      {project.description}
                    </div>

                    {/* Technologies */}
                    <div className="w-full md:w-1/3 flex flex-wrap gap-1 content-start">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-[#ECE9D8] border border-[#D1D1D1] text-[10px] text-[#444] rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;