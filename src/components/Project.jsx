import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import XPExplorerSidebar from "./XPExplorerSidebar";
import XPWindow from "./XPWindow";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="pb-4 px-4">
      {/* XP Window Style Container - Static for embedding in page */}
      <div className="mt-8 bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md flex flex-col h-[600px]">
        {/* Title Bar */}
        <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded-sm opacity-50"></div>
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

        {/* Address Bar (Optional, adds to the look) */}
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

          {/* Grid View */}
          <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
            {/* Grid Header */}
            <div className="px-4 py-2 border-b border-[#D1D1D1] bg-white shrink-0">
              <span className="font-bold text-sm text-[#444]">My Projects</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {PROJECTS.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1 group cursor-pointer w-24"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Icon */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-12 h-12 object-contain drop-shadow-md group-hover:brightness-110"
                      />
                    </div>
                    {/* Label */}
                    <span className="text-[11px] text-center text-black group-hover:bg-[#316AC5] group-hover:text-white px-1 rounded-[2px] line-clamp-2 leading-tight">
                      {project.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
            <XPWindow
              title={selectedProject.title}
              onClose={() => setSelectedProject(null)}
              defaultSize={{ width: 600, height: 450 }}
              defaultPosition={{ x: window.innerWidth / 2 - 300, y: window.innerHeight / 2 - 225 }}
              className="shadow-2xl"
            >
              <div className="p-4 bg-white h-full overflow-y-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full md:w-1/3 object-contain border border-[#D1D1D1] p-1 bg-white shadow-sm self-start"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#204E80] mb-2 font-tahoma">{selectedProject.title}</h3>
                    <p className="text-sm text-gray-800 mb-4 font-tahoma leading-relaxed whitespace-pre-wrap">
                      {selectedProject.description}
                    </p>

                    <div className="mb-2">
                      <span className="text-xs font-bold text-[#444] block mb-1">Technologies:</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-0.5 bg-[#ECE9D8] border border-[#D1D1D1] text-[10px] text-[#444] rounded-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </XPWindow>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;