import { motion } from "framer-motion";

// Programming Languages & Scripting
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitSquare, FaLinux, FaChevronUp, FaSync, FaClock, FaQuestionCircle, FaCogs } from "react-icons/fa";
import { SiC, SiLua, SiLatex } from "react-icons/si";
import { TbSql, TbAssembly } from "react-icons/tb";

// Web & Cloud Technologies
import { RiReactjsLine } from "react-icons/ri";
import { SiFlask, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

// Tools, IDEs & Data Science
import { SiPycharm, SiEclipseide, SiRstudioide, SiUnrealengine, SiRobloxstudio, SiNumpy, SiPandas } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Section 1: Programming Languages & Scripting
const programmingLanguages = [
  { icon: FaJava, name: "Java", color: "text-red-600", duration: 2.5 },
  { icon: FaPython, name: "Python", color: "text-blue-400", duration: 2.7 },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-300", duration: 2.9 },
  { icon: SiC, name: "C", color: "text-blue-400", duration: 3 },
  { icon: SiLua, name: "Lua", color: "text-blue-600", duration: 3.2 },
  { icon: TbSql, name: "SQL", color: "text-blue-500", duration: 3.4 },
  { icon: TbAssembly, name: "Assembly", color: "text-gray-400", duration: 3.6 },

];

// Section 2: Web & Cloud Technologies
const webAndCloud = [
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 2.5 },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500", duration: 2.7 },
  { icon: SiFlask, name: "Flask", color: "text-gray-300", duration: 2.9 },
  { icon: TbBrandFramerMotion, name: "FramerMotion", color: "text-purple-500", duration: 3.1 },
  { icon: VscAzure, name: "Azure", color: "text-blue-500", duration: 3.3 },
  { icon: FaAws, name: "AWS", color: "text-orange-500", duration: 3.5 },
];

// Section 3: Tools, IDEs & Data Science
const toolsAndData = [
  { icon: VscVscode, name: "VS Code", color: "text-blue-500", duration: 2.5 },
  { icon: SiPycharm, name: "PyCharm", color: "text-green-500", duration: 2.7 },
  { icon: SiEclipseide, name: "Eclipse", color: "text-purple-400", duration: 2.9 },
  { icon: DiVisualstudio, name: "Visual Studio", color: "text-purple-500", duration: 3.1 },
  { icon: FaGitSquare, name: "Git", color: "text-orange-600", duration: 3.3 },
  { icon: FaLinux, name: "Linux", color: "text-yellow-500", duration: 3.5 },
  //   { icon: SiNumpy, name: "NumPy", color: "text-blue-500", duration: 3 },
  //   { icon: SiPandas, name: "Pandas", color: "text-red-500", duration: 3 },
];

// Helper function to render a row (using format from your second row)
const renderRow = (title, techs) => (
  <div className="mb-6">
    <h3 className="text-sm font-bold text-[#215DC6] mb-2 pl-2 border-b border-[#D6DFF7]">{title}</h3>
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="flex flex-wrap justify-center gap-4 px-2"
    >
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          variants={iconVariants(tech.duration)}
          initial="initial"
          animate="animate"
          className="group flex flex-col items-center w-24 p-2 hover:bg-[#E8F1FC] border border-transparent hover:border-[#7F9DB9] rounded-sm cursor-pointer"
        >
          <tech.icon
            className={`text-4xl ${tech.color} mb-2`}
          />
          <span className="text-center text-xs font-tahoma text-black group-hover:underline">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const TechnologiesComponent = () => {
  return (
    <div id="technologies" className="pb-4 px-4 overflow-visible">
      {/* Control Panel Theme */}
      <div className="mt-8 bg-[#ECE9D8] border-[3px] border-[#0055EA] rounded-t-lg overflow-hidden shadow-md">
        {/* Title Bar */}
        <div className="h-[30px] bg-gradient-to-b from-[#0058EE] via-[#3593FF] to-[#288EFF] px-2 flex items-center justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
          <div className="flex items-center gap-2">
            <FaCogs className="text-white drop-shadow-md" />
            <span className="text-white font-bold text-[13px] tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Tahoma' }}>Control Panel</span>
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
        <div className="bg-[#ECE9D8] border-b border-[#D1D1D1] px-2 py-1 flex gap-4 text-xs font-tahoma text-black">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Favorites</span>
          <span>Tools</span>
          <span>Help</span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-48 bg-gradient-to-b from-[#7BA2E7] to-[#6375D6] p-3 hidden lg:block">
            <div className="bg-white rounded-t-md overflow-hidden mb-4">
              <div className="bg-gradient-to-r from-[#FFFFFF] to-[#C6D3F7] px-3 py-1 font-bold text-[#215DC6] text-xs flex justify-between items-center cursor-pointer">
                <span>Control Panel</span>
                <div className="w-4 h-4 rounded-full border border-[#215DC6] flex items-center justify-center text-[#215DC6] text-[10px] bg-white/50">
                  <FaChevronUp size={10} />
                </div>
              </div>
              <div className="p-3 bg-[#D6DFF7]">
                <div className="flex items-center gap-2 mb-1 cursor-pointer hover:underline text-[#215DC6] text-xs group">
                  <FaSync className="text-lg group-hover:text-[#0000FF]" />
                  <span>Switch to Classic View</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-t-md overflow-hidden mb-4">
              <div className="bg-gradient-to-r from-[#FFFFFF] to-[#C6D3F7] px-3 py-1 font-bold text-[#215DC6] text-xs flex justify-between items-center cursor-pointer">
                <span>See Also</span>
                <div className="w-4 h-4 rounded-full border border-[#215DC6] flex items-center justify-center text-[#215DC6] text-[10px] bg-white/50">
                  <FaChevronUp size={10} />
                </div>
              </div>
              <div className="p-3 bg-[#D6DFF7]">
                <div className="flex items-center gap-2 mb-1 cursor-pointer hover:underline text-[#215DC6] text-xs group">
                  <FaClock className="text-lg group-hover:text-[#0000FF]" />
                  <span>Windows Update</span>
                </div>
                <div className="flex items-center gap-2 mb-1 cursor-pointer hover:underline text-[#215DC6] text-xs group">
                  <FaQuestionCircle className="text-lg group-hover:text-[#0000FF]" />
                  <span>Help and Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white p-6">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="mb-6 text-2xl font-tahoma text-gray-800"
            >
              Pick a category
            </motion.h2>
            <div className="space-y-4">
              {renderRow("Programming Languages", programmingLanguages)}
              {renderRow("Web & Cloud Technologies", webAndCloud)}
              {renderRow("Development Tools", toolsAndData)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesComponent;
