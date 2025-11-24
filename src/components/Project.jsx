import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="pb-4 px-4">
      {/* XP Window Style Container */}
      <div className="mt-8 bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md">
        {/* Title Bar */}
        <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
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
        <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-1 py-0.5 flex gap-2">
          {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map((menu) => (
            <div key={menu} className="px-2 py-0.5 hover:bg-[#316AC5] hover:text-white cursor-default text-sm font-tahoma">
              {menu}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-8 text-center text-3xl font-tahoma text-gray-800"
          >
            Projects
          </motion.h2>
          <div className="space-y-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="flex flex-wrap lg:justify-center bg-white border border-[#0055EA] rounded-t-sm shadow-sm"
              >
                {/* Project Header (Window Title Bar Style) */}
                <div className="w-full bg-gradient-to-r from-[#0058EE] to-[#3593FF] px-2 py-1 flex items-center justify-between">
                  <span className="text-white font-bold font-tahoma text-sm">{project.title}</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
                    <div className="w-3 h-3 bg-[#E0422E] rounded-sm border border-white/50"></div>
                  </div>
                </div>

                <div className="w-full p-4 flex flex-wrap">
                  {/* Image Section */}
                  <motion.div
                    className="w-full lg:w-1/4 flex justify-center lg:justify-start"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    <motion.img
                      src={project.image}
                      width={150}
                      height={150}
                      alt={project.title}
                      className="mb-6 border-2 border-[#828790] shadow-[2px_2px_5px_rgba(0,0,0,0.2)] bg-white p-1"
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.8, delay: index * 0.3 }}
                    />
                  </motion.div>

                  {/* Details Section */}
                  <motion.div
                    className="w-full max-w-xl lg:w-3/4 pl-0 lg:pl-4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                  >
                    <motion.p
                      className="mb-4 text-gray-800 font-tahoma text-sm"
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="rounded-sm bg-[#ECE9D8] border border-[#003C74] px-2 py-1 text-xs font-tahoma text-black shadow-[1px_1px_0_rgba(0,0,0,0.1)] hover:bg-[#F3F3F3] cursor-default"
                          whileInView={{ opacity: 1, scale: 1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.3 + techIndex * 0.1,
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;